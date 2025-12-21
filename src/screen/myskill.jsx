import { LineGradient } from "../component/LineGradient";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
export const MySkill = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-24 pb-24 z-40">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-10">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Frontend Developer with 2+ years of experience. Expertise in React.js, TypeScript, 
            HTML, CSS, JavaScript, Material UI, Ant Design, Tailwind, Redux, and REST API. 
            Basic knowledge of Django for backend integration.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-8 md:gap-16">
        {/* EXPERIENCE */}
        {/* <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[10]" />
          </div>
          <p className="mt-5">
            Experienced Full Stack Web Developer with 3 years of professional experience. 
            Proficient in Python Django and React, building scalable web applications. 
            Strong expertise in both backend and frontend development, creating interactive 
            and responsive user interfaces. Excellent collaboration and problem-solving abilities.
          </p>
        </motion.div> */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 mb-5">
            <div className="z-10 relative">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Frontend Developer with 2+ years of professional experience. 
            Specialized in React.js and modern frontend technologies, building interactive 
            and responsive user interfaces. Proficient in creating scalable web applications 
            with a focus on user experience. Basic knowledge of Django for backend integration. 
            Excellent collaboration and problem-solving abilities.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 mb-5">
            <div className="z-10 relative">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Web Development Trailblazer: Igniting Digital Possibilities with
            Fresh Perspectives and Cutting-Edge Skills
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 mb-5">
            <div className="z-10 relative">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Web Development Visionary: Weaving Imaginative Experiences with
            Unconventional Thinking and Technological Wizardry
          </p>
        </motion.div>
      </div>

      {/* SKILLS GRID */}
      <motion.div
        className="mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h3 className="font-playfair font-semibold text-2xl mb-8 text-center">
          Technical <span className="text-yellow">Skills</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {[
            "HTML", "CSS", "JavaScript", "React.js",
            "Python", "Django", "Material UI", "Ant Design", "Tailwind", "Redux",
        
          ].map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-blue/10 backdrop-blur-sm border-2 border-blue/30 rounded-lg p-4 text-center hover:border-yellow hover:bg-yellow/20 hover:shadow-lg hover:shadow-yellow/30 transition-all duration-300 cursor-default card-hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.08, y: -5 }}
            >
              <p className="font-semibold text-sm">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
