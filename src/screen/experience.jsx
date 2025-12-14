import { LineGradient } from "../component/LineGradient";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const Experience = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="experience" className="pt-24 pb-24">
      {/* HEADER */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            WORK <span className="text-red">EXPERIENCE</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>

      {/* EXPERIENCE CARDS */}
      <div className="mt-16 md:mt-20">
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* EXPERIENCE CARD */}
          <div className="relative bg-blue/10 backdrop-blur-sm rounded-lg p-8 border-2 border-blue/30 hover:border-blue hover:shadow-2xl hover:shadow-blue/50 transition-all duration-500 w-full max-w-3xl mx-auto card-hover">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-rainblue rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl font-playfair font-bold text-deep-blue">N</span>
            </div>
            
            <div className="mt-4">
              <h3 className="text-2xl font-playfair font-semibold text-yellow mb-2">
                Web Developer
              </h3>
              <h4 className="text-xl font-opensans font-semibold text-blue mb-3">
                Nummero
              </h4>
              <p className="text-sm text-grey mb-4">
                09/2022 - Current • Bangalore
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red text-xl mt-1">▸</span>
                  <p className="text-grey">
                    Developed a high-converting landing page to enhance user engagement and lead generation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red text-xl mt-1">▸</span>
                  <p className="text-grey">
                    Designed and implemented a simple, responsive website, ensuring smooth user navigation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red text-xl mt-1">▸</span>
                  <p className="text-grey">
                    Optimized website performance for faster load times and improved user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

