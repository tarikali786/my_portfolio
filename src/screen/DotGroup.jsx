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
        offset={80}
        onClick={() => setTimeout(() => setSelectedPage("home"), 100)}
        title="home"
      />

      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        offset={80}
        title="skills"
        onClick={() => setTimeout(() => setSelectedPage("skills"), 100)}
      />

      <AnchorLink
        href="#experience"
        className={`${
          selectedPage === "experience" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        offset={80}
        title="experience"
        onClick={() => setTimeout(() => setSelectedPage("experience"), 100)}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        offset={80}
        title="projects"
        onClick={() => setTimeout(() => setSelectedPage("projects"), 100)}
      />

      <AnchorLink
        href="#education"
        className={`${
          selectedPage === "education" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        offset={80}
        title="education"
        onClick={() => setTimeout(() => setSelectedPage("education"), 100)}
      />

      <AnchorLink
        href="#achievements"
        className={`${
          selectedPage === "achievements" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        offset={80}
        title="achievements"
        onClick={() => setTimeout(() => setSelectedPage("achievements"), 100)}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        offset={80}
        title="contact"
        onClick={() => setTimeout(() => setSelectedPage("contact"), 100)}
      />
    </div>
  );
};
