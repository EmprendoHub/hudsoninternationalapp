import CustomSessionProvider from "./SessionProvider";
import "./css/globals.css";
import FooterComponent from "@/components/footer/FooterComponent";
//import BackToTopButton from "@/components/buttons/BackToTopButton";
import WhatsAppButton from "@/components/buttons/WhatsAppButton";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import HeaderComponent from "@/components/headers/HeaderComponent";
import LocaleToggle from "@/components/layout/LocaleToggle";
import LocaleToggleStyled from "@/components/buttons/LocaleToggleStyled";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import AdminThemeToggle from "@/components/layout/AdminThemeToggle";
import BackToTopButton from "@/components/buttons/BackToTopButton";

export const metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL("https://www.hudsoninternationalmarket.com"),
  title: "Hudson International Market",
  description:
    "Comercio Internacional de Granos, Hierbas, Especias y Condimentos",
  openGraph: {
    title: "Hudson International Market",
    description:
      "Comercio Internacional de Granos, Hierbas, Especias y Condimentos",
    image: "url/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hudsoninternationalmarket",
    title: "Hudson International Market",
    description:
      "Comercio Internacional de Granos, Hierbas, Especias y Condimentos",
    image: "url/opengraph-image.png",
  },
};

export const viewport = {
  themeColor: "#0D121B",
};

export default async function RootLayout({ children, params }) {
  const session = await getServerSession(options);
  const isLoggedIn = Boolean(session?.user);
  const lang = params.lang;
  return (
    <html lang={`${lang}`}>
      <GoogleTagManager gtmId="GTM-NZ8VMWZ" />
      <GoogleAnalytics gaId="G-GW5V9YLG5X" />
      <body
        className={`body-class relative overflow-x-hidden h-full dark:bg-dark bg-white dark:text-white`}
      >
        <CustomSessionProvider>
          <HeaderComponent lang={lang} />

          {children}
          <FooterComponent session={session} lang={lang} />
          <BackToTopButton />
          {!isLoggedIn && <WhatsAppButton lang={lang} />}
          {isLoggedIn && session?.user.role === "manager" && (
            <div className="fixed z-50 right-0 top-1/2">
              {/* <LocaleToggleStyled lang={lang} /> */}
              <AdminThemeToggle />
            </div>
          )}
        </CustomSessionProvider>
      </body>
    </html>
  );
}
