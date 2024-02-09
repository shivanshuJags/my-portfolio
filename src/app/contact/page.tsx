import Image from "next/image";

import SendMail from "@/components/contacts/send-mail";
import SlideInDiv from "@/components/contacts/slide-in";
import SocialBox from "@/components/contacts/social-box";
import WhiteSection from "@/components/common/white-section";

export default function ContactPage() {
  return (
    <>
      <WhiteSection>
        <div className="mx-auto flex flex-wrap w-full max-w-screen-xl mx-auto p-4 md:py-8">
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
      </WhiteSection>
      <div className="px-4 pt-8 max-w-screen-xl mx-auto w-full">
        <SendMail />
      </div>
    </>
  );
}
