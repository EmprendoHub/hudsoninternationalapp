import Analytic from "@/backend/models/Analytic";
import Visitor from "@/backend/models/Visitor";
import { NextResponse, userAgent } from "next/server";

export const POST = async (request) => {
  //console.log(request);
  const ip = (request.headers.get("x-forwarded-for") ?? "127.0.0.1")
    .split(",")[0]
    .replace(/^::ffff:/, "");
  const { device, browser } = userAgent(request);
  const headers = request.headers;
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  const deviceData = {
    vendor: device.vendor || "unknown",
    model: device.model || "unknown",
    type: device.type === "mobile" ? "mobile" : "desktop",
  };
  const url = request.nextUrl;
  const browserName = browser.name;
  const source = url.href;
  const country = request.geo?.country || "";
  console.log(source, country, ip, viewport, browserName, deviceData, "route");

  try {
    // Get the current UTC date and time
    const currentDate = new Date();
    // To adjust for CST (UTC-6) without using libraries like moment-timezone,
    // we can manually calculate the offset in hours.
    const cstOffsetHours = -6;

    // Convert the current date to UTC+0 (Essentially, it's already in UTC+0)
    let today = new Date(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth(),
      currentDate.getUTCDate(),
      currentDate.getUTCHours(),
      currentDate.getUTCMinutes(),
      currentDate.getUTCSeconds()
    );

    // Apply CST offset by subtracting 6 hours
    today.setHours(currentDate.getHours() + cstOffsetHours);
    // Normalize to start of the CST day
    today.setUTCHours(0, 0, 0, 0);

    // Update or create Analytic document
    const dayAnalytics = await Analytic.findOne({
      createdAt: today,
      "source.page": source,
    });

    if (!dayAnalytics) {
      // No document for today and this source, create a new one
      const newAnalytics = new Analytic({
        createdAt: today, // Ensure the createdAt time is set when the document is created
        source: [
          {
            page: source,
            visits: 1, // Start with 1 visit
          },
        ],
      });
      await newAnalytics.save();
    } else {
      // Document exists, update the visits for the specific source
      const sourceItem = dayAnalytics.source.find((s) => s.page === source);
      if (sourceItem) {
        // Source found, increment visits
        sourceItem.visits++;
      } else {
        // Source not found in the array, add new source with 1 visit
        dayAnalytics.source.push({
          page: source,
          visits: 1,
        });
      }
      await dayAnalytics.save();
    }

    // Find the visitor by IP and update
    const visitor = await Visitor.findOne({ ip: ip });
    if (!visitor) {
      // If no visitor exists, create a new one
      const newVisitor = new Visitor({
        ip,
        country,
        actions: [
          {
            name: "visit",
            source: source,
            date: today,
            viewport: viewport,
            browser: browserName,
            device: device,
          },
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await newVisitor.save();
    } else {
      // Check if there is an existing action today with the same name and source
      const existingActions = visitor?.actions.find(
        (action) =>
          action.name === "visit" &&
          action.source === source &&
          action.viewport === viewport &&
          action.browser === browserName &&
          action.date.toDateString() === today.toDateString()
      );

      if (existingActions) {
        // Increment the visits count for the existing action
        existingActions.visits++;
      } else {
        // Add a new action if none exists that matches
        await visitor?.actions?.push({
          name: "visit",
          source: source,
          date: today,
          viewport: viewport,
          browser: browserName,
          device: device,
        });
      }
      visitor.updatedAt = new Date(); // Update the last updated timestamp
      await visitor.save();
    }

    const response = NextResponse.json({
      message: "Tracked successfully",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Translation error",
      },
      { status: 500 }
    );
  }
};
