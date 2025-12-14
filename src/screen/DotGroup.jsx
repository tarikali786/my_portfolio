import AnchorLink from "react-anchor-link-smooth-scroll";

export const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
        title="home"
      />

      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        title="skills"
        onClick={() => setSelectedPage("skills")}
      />

      <AnchorLink
        href="#experience"
        className={`${
          selectedPage === "experience" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        title="experience"
        onClick={() => setSelectedPage("experience")}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        title="projects"
        onClick={() => setSelectedPage("projects")}
      />

      <AnchorLink
        href="#education"
        className={`${
          selectedPage === "education" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        title="education"
        onClick={() => setSelectedPage("education")}
      />

      <AnchorLink
        href="#achievements"
        className={`${
          selectedPage === "achievements" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        title="achievements"
        onClick={() => setSelectedPage("achievements")}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        title="contact"
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};
