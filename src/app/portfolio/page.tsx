import Image from "next/image";

import WhiteSection from "@/components/common/white-section";
import SlideInDiv from "@/components/contacts/slide-in";
import Card from "@/components/card/card";

import classes from "@/styles/portfolio/portfolio.module.css";
import ProgrammingLanguage from "@/components/programming/programming-language";
import TimelineComponent from "@/components/timeline/timeline";

export default function PortfolioPage() {
  return (
    <>
      <WhiteSection>
        <div className="mx-auto flex flex-wrap w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <SlideInDiv postion="left">
            <h1 className={`${classes.title1} mb-4`}>portfolio</h1>
            <p className={`${classes.intro1} mb-6`}>
              Check out some of my latest UI/UX design case studies.
            </p>
            <p className={classes.intro2}>
              ve worked at start-ups, tech companies and corporates on a range
              of different projects, including design systems, websites and
              apps.
            </p>
          </SlideInDiv>
          <SlideInDiv postion="right">
            <ProgrammingLanguage />
          </SlideInDiv>
        </div>
      </WhiteSection>
      <div className="px-4 pt-8 max-w-screen-xl mx-auto w-full">
        <h2 className={classes.title2}>Work Experience</h2>
        <div className="flex flex-wrap">
          <TimelineComponent />
        </div>
      </div>
    </>
  );
}
