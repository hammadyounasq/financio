// export default function FeaturesSection() {
//   return (
//     <section className="flex flex-col md:flex-row">
//       <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
//         <div className="inline-block w-fit px-4 py-2 rounded-full bg-[#EBEFF5] text-[#202939] text-sm font-medium mb-6">
//           Smooth onboarding
//         </div>

//         <h2 className="text-3xl md:text-4xl lg:text-3.5xl font-medium text-gray-900 mb-6">
//           Your personal finances,
//           <br />a few taps away.
//         </h2>

//         <p className="text-gray-600 mb-8">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           varius enim in eros elementum tristique.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//           <div className="flex items-center">
//             <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-2">
//               <svg
//                 className="w-4 h-4 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//             <span>Saving</span>
//           </div>

//           <div className="flex items-center">
//             <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-2">
//               <svg
//                 className="w-4 h-4 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//             <span>Payments</span>
//           </div>

//           <div className="flex items-center">
//             <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-2">
//               <svg
//                 className="w-4 h-4 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//             <span>Investing</span>
//           </div>

//           <div className="flex items-center">
//             <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-2">
//               <svg
//                 className="w-4 h-4 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//             <span>Scheduling</span>
//           </div>

//           <div className="flex items-center">
//             <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-2">
//               <svg
//                 className="w-4 h-4 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//             </div>
//             <span>Tracking</span>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row items-center gap-4">
//           <button className="px-6 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors">
//             Get started
//           </button>
//           <a
//             href="#"
//             className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
//           >
//             Learn more
//             <svg
//               className="ml-1 w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>

//       <div className="w-full md:w-1/2  flex items-center justify-center p-8 md:p-16 lg:p-24">
//         <img
//           src="/personalfinances.svg"
//           alt="Financial app interface"
//           className=" object-cover "
//         />
//       </div>
//     </section>
//   );
// }
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const features = [
    "Saving",
    "Payments",
    "Investing",
    "Scheduling",
    "Tracking",
  ];

  return (
    <section ref={sectionRef} className="flex flex-col md:flex-row">
      <motion.div
        className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="inline-block w-fit px-4 py-2 rounded-full bg-[#EBEFF5] text-[#202939] text-sm font-medium mb-6"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Smooth onboarding
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-3.5xl font-medium text-gray-900 mb-6"
          variants={itemVariants}
        >
          Your personal finances,
          <br />a few taps away.
        </motion.h2>

        <motion.p className="text-gray-600 mb-8" variants={itemVariants}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              className="flex items-center"
              variants={featureVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              custom={index}
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                    variants={checkmarkVariants}
                    custom={index}
                  />
                </svg>
              </motion.div>
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          variants={containerVariants}
        >
          <motion.button
            className="px-6 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get started
          </motion.button>

          <motion.a
            href="#"
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              x: 5,
            }}
          >
            Learn more
            <motion.svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={isInView ? { x: [0, 5, 0] } : { x: 0 }}
              transition={{
                duration: 1,
                delay: 1.5,
                repeat: 2,
                repeatType: "reverse",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <motion.img
          src="/personalfinances.svg"
          alt="Financial app interface"
          className="object-cover"
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.3 },
          }}
        />
      </motion.div>
    </section>
  );
}
