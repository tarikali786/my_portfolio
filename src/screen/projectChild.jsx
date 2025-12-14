import { motion } from "framer-motion";
export const ProjectChild = ({ title, headingtitle, context }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-95 transition duration-500
      bg-gradient-to-br from-blue/95 to-red/95 z-30 flex flex-col justify-center items-center text-center p-8 text-white rounded-lg`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <motion.div 
        variants={projectVariant} 
        className="relative rounded-lg overflow-hidden shadow-2xl hover:shadow-yellow/50 transition-shadow duration-500"
      >
        <div className={overlayStyles}>
          <p className="text-3xl font-playfair font-bold mb-4">{headingtitle}</p>
          <p className="mt-4 text-sm leading-relaxed max-w-md">{context}</p>
        </div>
        <img 
          src={`../assets/${projectTitle}.jpeg`} 
          alt={projectTitle}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            // Fallback to a default image if project image doesn't exist
            e.target.src = "../assets/project-1.jpeg";
          }}
        />
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
