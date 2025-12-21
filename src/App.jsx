import { useEffect, useState } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { Navbar } from "./screen/Navbar";
import { DotGroup } from "./screen/DotGroup";
import { Landing } from "./screen/landing";
import { LineGradient } from "./component/LineGradient";
import { MySkill } from "./screen/myskill";
import { Project } from "./screen/project";
import { Contact } from "./screen/contact";
import { Testimonials } from "./screen/testimonials";
import { Footer } from "./screen/footer";
import { Experience } from "./screen/experience";
import { Education } from "./screen/education";
import { Achievements } from "./screen/achievements";
import "./App.css";
export const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Simulating an asynchronous loading process
    setTimeout(() => {
      setIsLoading(false); // Update loading state after loading is complete
    }, 2000);
  }, []);

  // if (isLoading) {
  //   return <div className="">Loading...</div>; // Render the loading page
  // }

  return (
    <>
      <div className="app bg-deep-blue ">
        {/* <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        /> */}

        <div className="w-5/6 mx-auto">
          {/* {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )} */}
          <Landing setSelectedPage={setSelectedPage} />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <MySkill />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <Experience />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <Project />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <Education />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <Achievements />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};
