import ContactInner from "@/components/contact/ContactInner";
import { getDictionary } from "@/lib/dictionary";

const ContactoPage = async ({ params }) => {
  const lang = params.lang;
  const { homeDic, contactDic } = await getDictionary(lang);
  return <ContactInner homeDic={homeDic} contactDic={contactDic} />;
};

export default ContactoPage;
