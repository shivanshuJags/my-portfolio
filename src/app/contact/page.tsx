import Image from "next/image";

import SendMail from "@/components/contacts/send-mail";
import SlideInDiv from "@/components/contacts/slide-in";
import SocialBox from "@/components/contacts/social-box";

import classes from "@/styles/contact.module.css";

export default function ContactPage() {
  return (
    <>
      <div id="section1" className={`${classes.section1} flex flex-row`}>
        <SlideInDiv postion="left">
          <SocialBox />
        </SlideInDiv>
        <SlideInDiv postion="right">
          <Image
            key="1"
            src="/code.webp"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="image"
          />
        </SlideInDiv>
      </div>
      <div id="section2" className={`${classes.section2} pt-8`}>
        <SendMail />
      </div>
    </>
  );
}
