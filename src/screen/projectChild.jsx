import { motion } from "framer-motion";
export const ProjectChild = ({ title, headingtitle, context }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30  flex flex-col justify-center items-center text-center  p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <motion.div variants={projectVariant} className="relative ">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{headingtitle}</p>
          <p className="mt-7">{context}</p>
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </motion.div>
    </>
  );
};

// const Projects = ({ title, headingtitle, context }) => {
//   const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
//       bg-grey z-30  flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
//   const projectTitle = title.split(" ").join("-").toLowerCase();

//   return (
//     <motion.div variants={projectVariant} className="relative">
//       <div className={overlayStyles}>
//         <p className="text-2xl font-playfair">{headingtitle}</p>
//         <p className="mt-7">{context}</p>
//       </div>
//       <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
//     </motion.div>
//   );
// };
