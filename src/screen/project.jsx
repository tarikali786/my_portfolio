import { LineGradient } from "../component/LineGradient";
import { motion } from "framer-motion";
import { ProjectChild } from "./projectChild";
export const Project = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="projects" className="pt-24 pb-24">
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
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Innovative web applications built with modern technologies, focusing on user experience and performance.
        </p>
      </motion.div>

      {/* PROJECTS GRID */}
      <motion.div
        className="sm:grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ProjectChild
          title="greenbowl"
          headingtitle="GreenBowl - Custom Salad Maker"
          context="A dynamic web application enabling users to create and save customized salad recipes with options for various ingredients and toppings. Includes a real-time recipe overview, price, and calorie calculation. Utilized Context API for state management and real-time updates. Technologies: ReactJS, Tailwind, Django."
        />

        <ProjectChild
          title="chatbot"
          headingtitle="Chat App (Chatbot)"
          context="Built a real-time chat app with user login and text messaging features. Designed and implemented a user-friendly interface for seamless communication. Technologies: JavaScript, React, TypeScript, CSS, Python, Django, Channels, Redis."
        />
      </motion.div>
    </section>
  );
};
