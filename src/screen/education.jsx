import { LineGradient } from "../component/LineGradient";
import { motion } from "framer-motion";

export const Education = () => {
  const educationData = [
    {
      degree: "Computer Science",
      institution: "Asian International University",
      period: "05/2022 - Present",
      location: "Manipur",
      achievement: "7.8 CGPA",
      icon: "🎓",
    },
    {
      degree: "Electronic Engineering (Diploma)",
      institution: "B.N.C.E.T",
      period: "07/2019 - 06/2022",
      location: "Lucknow",
      achievement: "84%",
      icon: "⚡",
    },
  ];

  return (
    <section id="education" className="pt-24 pb-24">
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
            <span className="text-yellow">EDUCATION</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>

      {/* EDUCATION CARDS */}
      <div className="mt-16 md:mt-20 md:flex md:justify-center gap-8 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative bg-red/10 backdrop-blur-sm rounded-lg p-8 border-2 border-red/30 hover:border-red hover:shadow-2xl hover:shadow-red/30 transition-all duration-500 mb-8 md:mb-0 flex-1 min-h-[300px] card-hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-rainblue rounded-full flex items-center justify-center text-3xl">
              {edu.icon}
            </div>
            
            <div className="mt-4">
              <h3 className="text-2xl font-playfair font-semibold text-yellow mb-2">
                {edu.degree}
              </h3>
              <h4 className="text-xl font-opensans font-semibold text-red mb-3">
                {edu.institution}
              </h4>
              <p className="text-sm text-grey mb-2">
                {edu.period} • {edu.location}
              </p>
              <div className="mt-4 px-4 py-2 bg-yellow/20 rounded-full inline-block">
                <p className="text-yellow font-semibold">{edu.achievement}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

