import { LineGradient } from "../component/LineGradient";
import { motion } from "framer-motion";
import { ProjectChild } from "./projectChild";
export const Project = () => {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="ProjectChild" className="pt-48 pb-48">
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
        <div className="md:mt-[100px]">
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          TechConnect: Empowering Users with Study Rooms, Social Sharing, Online
          Shopping, and Weather Updates
        </p>
      </motion.div>

      {/* PROJECT  */}
      {/* ROW 1 */}
      <motion.div
        className="sm:grid sm:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* <div
          className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
        >
          BEAUTIFUL USER INTERFACES
        </div> */}

        <ProjectChild
          title="Project 4"
          headingtitle=" Study Hub"
          context="StudyHub is a comprehensive platform designed to empower students in their academic journey. With interactive study rooms, students can collaborate, discuss, and learn from each other, fostering a supportive learning environment. Peer communication allows for sharing knowledge, insights, and resources, further enhancing the learning experience. StudyHub aims to facilitate academic success by providing a space where students can connect, engage, and thrive together."
        />

        <ProjectChild
          title="Project 1"
          headingtitle="Social Snaps"
          context="Social is a vibrant online platform where users can effortlessly share their captivating photos with the world. Whether it's stunning landscapes, adorable pets, or captivating moments, users can upload and showcase their visual stories. With an intuitive interface, fellow users can explore, engage, and express their admiration by liking their favorite photos. Join the SocialSnaps community and embark on a visually captivating journey."
        />
        <ProjectChild
          title="Project 2"
          headingtitle="Amazon Clone"
          context="Experience the thrill of online shopping with ReactZone, an Amazon clone built using React. Browse through a vast catalog of products, from electronics to fashion, and find exactly what you need. Seamlessly add items to your cart, securely complete transactions, and enjoy fast and reliable delivery. With ReactZone, your ultimate shopping destination awaits."
        />

        {/* ROW 2 */}
        <ProjectChild
          title="Project 3"
          headingtitle="Weather Clone"
          context="Stay informed about the weather conditions with WeatherNow, your personal weather app. Get real-time updates on temperature, humidity, wind speed, and more for any location worldwide. Plan your day, stay prepared for outdoor activities, and make informed decisions with accurate weather forecasts. With a user-friendly interface and reliable data sources, WeatherNow is your go-to app for staying connected to the weather around you.




"
        />

        {/* <div
          className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
        >
          SMOOTH USER EXPERIENCE
        </div> */}
      </motion.div>
    </section>
  );
};
