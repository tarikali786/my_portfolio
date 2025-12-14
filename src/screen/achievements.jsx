import { LineGradient } from "../component/LineGradient";
import { motion } from "framer-motion";

export const Achievements = () => {
  const achievements = [
    {
      title: "Gold Medalist",
      icon: "🥇",
      description: "Outstanding performance",
    },
    {
      title: "Silver Medalist",
      icon: "🥈",
      description: "Excellence in academics",
    },
    {
      title: "Full Stack Developer",
      icon: "🎓",
      description: "Certificate (02/2022 - 07/2022)",
      details: "HTML, CSS, JavaScript, React.js, Python, Django",
    },
  ];

  return (
    <section id="achievements" className="pt-24 pb-24">
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
            ACHIEVEMENTS & <span className="text-red">CERTIFICATES</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>

      {/* ACHIEVEMENTS GRID */}
      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-blue/20 to-red/20 backdrop-blur-sm rounded-lg p-8 border-2 border-blue/30 hover:border-yellow hover:shadow-2xl hover:shadow-yellow/30 transition-all duration-500 hover:scale-105 card-hover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="text-6xl mb-4 text-center">{achievement.icon}</div>
            <h3 className="text-2xl font-playfair font-semibold text-yellow mb-2 text-center">
              {achievement.title}
            </h3>
            <p className="text-grey text-center mb-2">{achievement.description}</p>
            {achievement.details && (
              <p className="text-sm text-blue/80 text-center mt-4">
                {achievement.details}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

