import Analytic from "@/backend/models/Analytic";
import Visitor from "@/backend/models/Visitor";
import { NextResponse } from "next/server";

// Helper function to log time spent
const logTimeSpent = (label, startTime) => {
  const endTime = performance.now();
  console.log(`${label}: ${endTime - startTime} ms`);
};

export const POST = async (request) => {
  const { event, source, country, ip, viewport, browserName, device } =
    await request.json();
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
    let startTime = performance.now();
    const dayAnalytics = await Analytic.findOne({
      createdAt: today,
      "source.page": source,
    });

    if (!dayAnalytics) {
      // No document for today and this source, create a new one
      const newAnalytics = new Analytic({
        createdAt: new Date(), // Ensure the createdAt time is set when the document is created
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
    logTimeSpent("Find Analytic document", startTime);
    // Find the visitor by IP and update
    let startVisitorTime = performance.now();
    const visitor = await Visitor.findOne({ ip: ip });
    if (!visitor) {
      // If no visitor exists, create a new one
      const newVisitor = new Visitor({
        ip,
        country,
        actions: [
          {
            name: event,
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
          action.name === event &&
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
          name: event,
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
    logTimeSpent("Find Visitor document", startVisitorTime);
    const response = NextResponse.json({
      message: "Tracked successfully",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Analytics error",
      },
      { status: 500 }
    );
  }
};
