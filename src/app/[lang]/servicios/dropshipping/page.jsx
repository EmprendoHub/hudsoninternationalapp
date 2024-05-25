import DropShippingComp from "@/components/dropshipping/DropShippingComp";
import React from "react";
import { getDictionary } from "@/lib/dictionary";

export const metadata = {
  title: "Emprendomex Marketing Ecommerce Dropshipping API",
  description:
    "Expertos en desarrollo de aplicaciones y sitios web con funciones avanzadas, Marketing digital y embudos de venta",
  openGraph: {
    title: "Ecommerce Dropshipping API",
    description:
      "Desarrollo en React y Next Js de comercio electrónico con API para revendedores",
    image: "url/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@emprendomex",
    title: "Ecommerce Dropshipping API",
    description:
      "Desarrollo en React y Next Js de comercio electrónico con API para revendedores",
    image: "url/opengraph-image.png",
  },
};

const sassPage = async ({ params }) => {
  const lang = params.lang;
  const { dropshippingDic } = await getDictionary(lang);
  return <DropShippingComp lang={lang} dropshippingDic={dropshippingDic} />;
};

export default sassPage;
