import DropShippingComp from "@/components/dropshipping/DropShippingComp";
import React from "react";
import { getDictionary } from "@/lib/dictionary";

export const metadata = {
  title: "Hudson International Market",
  description:
    "We are a trading company with more than 20 years in the market, specialized in the exchange of spices, condiments and other food ingredients.",
  openGraph: {
    title: "Wholesale Import and Export",
    description:
      "We are a trading company with more than 20 years in the market, specialized in the exchange of spices, condiments and other food ingredients.",
    image: "url/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hudson-international-market",
    title: "Wholesale Import and Export",
    description:
      "We are a trading company with more than 20 years in the market, specialized in the exchange of spices, condiments and other food ingredients.",
    image: "url/opengraph-image.png",
  },
};

const sassPage = async ({ params }) => {
  const lang = params.lang;
  const { dropshippingDic } = await getDictionary(lang);
  return <DropShippingComp lang={lang} dropshippingDic={dropshippingDic} />;
};

export default sassPage;
