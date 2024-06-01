import { getDictionary } from "@/lib/dictionary";
import FooterCTA from "./FooterCTA";
import FooterMenu from "./FooterMenu";
import FooterBar from "./FooterBar";

const FooterComponent = async ({ lang, session }) => {
  const { footer } = await getDictionary(lang);
  return (
    <div className="relative w-full mx-auto px-20 bg-primary text-white maxmd:px-5 pt-24 mt-20">
      {/* Call to action */}
      {session?.user.role !== "manager" && (
        <>
          {/* <FooterCTA localeFooter={footer} lang={lang} /> */}
          <FooterMenu localeFooter={footer} lang={lang} />
        </>
      )}

      <FooterBar localeFooter={footer} lang={lang} />
    </div>
  );
};

export default FooterComponent;
