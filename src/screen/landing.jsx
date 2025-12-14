import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { SocialMediaIcons } from "../Component/SocialMediaIcons";
import { SocialMediaIcons } from "../component/SocialMediaIcons";
export const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <>
      <section
        id="home"
        className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
      >
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
          {isAboveMediumScreen ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 rounded-t-[20px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full h-[500px] md:max-w-[600px]  border-2 border-blue-500"
                src="assets/tarik3.jpeg"
              />
            </div>
          ) : (
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-[250px]   h-[250px] rounded-full md:max-w-[600px]  border-2 border-blue-500"
              src="assets/tarik3.jpeg"
            />
          )}
        </div>

        {/* MAIN TEXT */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-6xl font-playfair z-10 text-center md:text-start">
              Tarik {""}
              <span
                className=" xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[30px] before:-top-[70px] before:z-[-1]"
              >
                {""} Ali
              </span>
            </p>

            <p className="mt-10 mb-7 text-lg text-center md:text-start">
              I'm a passionate Web Developer with 3 years of experience in modern web technologies. 
              I specialize in building dynamic, responsive applications using React, Python, and Django. 
              My expertise spans across multiple domains, and I love exploring new technologies and 
              innovative solutions. I'm dedicated to creating high-quality, performant web applications 
              that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col items-center md:items-start">
              <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-blue/20 rounded-full text-sm font-semibold">React.js</span>
                <span className="px-4 py-2 bg-red/20 rounded-full text-sm font-semibold">Python</span>
                <span className="px-4 py-2 bg-yellow/20 rounded-full text-sm font-semibold">Django</span>
                <span className="px-4 py-2 bg-blue/20 rounded-full text-sm font-semibold">TypeScript</span>
              </div>
            </div>
          </motion.div>

          {/* CALL TO ACTIONS */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex mt-5 justify-center md:justify-start">
              <AnchorLink
                className="bg-gradient-rainblue text-deep-blue rounded-lg py-3 px-7 font-semibold
                hover:bg-blue hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue/50 btn-primary"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                Contact Me
              </AnchorLink>
              <AnchorLink
                className="rounded-r-lg bg-gradient-rainblue py-0.5 pr-0.5 hover:scale-105 transition-all duration-500"
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                <div className="bg-deep-blue hover:text-red transition-all duration-500 w-full h-full flex items-center justify-center px-10 font-playfair rounded-r-lg hover:bg-opacity-90">
                  Let's talk.
                </div>
              </AnchorLink>
            </div>
          </motion.div>

          <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SocialMediaIcons />
          </motion.div>
        </div>
      </section>
    </>
  );
};
