// export default function NotificationsSection() {
//   return (
//     <section className="flex flex-col md:flex-row bg-[#F6F6F6] pt-10">
//       <div className="w-full md:w-1/2  flex items-center justify-center">
//         {/* This is where you would place your image */}
//         <img
//           src="/Notifications.svg"
//           alt="Notifications interface"
//           className="max-w-full h-auto"
//         />
//       </div>

//       <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
//         {/* inline-block w-fit px-4 py-2 rounded-full bg-[#EBEFF5] text-[#202939]
//         text-sm font-medium mb-6 */}
//         <div
//           className=" nline-block w-fit px-4 py-2 rounded-full bg-[#EBEFF5] text-[#202939]
//         text-sm font-medium mb-6"
//         >
//           Notifications
//         </div>
//         <h2 className="text-3xl md:text-4xl lg:text-3.5xl font-medium text-gray-900 mb-6">
//           Real time notifications on
//           <br />
//           account activity
//         </h2>
//         <p className="text-gray-600 mb-8">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           varius enim in eros elementum tristique.
//         </p>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           {/* First pricing card */}
//           <div className="bg-white rounded-xl p-6 shadow-sm">
//             <div className="flex justify-between items-start mb-4">
//               <span className="text-4xl font-bold">$129</span>
//               <div className="flex items-center rounded-full px-3 py-2 bg-[#ECFDF3] text-green-600 text-sm font-medium">
//                 <img
//                   className="w-5 h-5 mr-2"
//                   src="/magic.png"
//                   alt="Notifications interface"
//                 />
//                 Up to 25%
//               </div>
//             </div>
//             <p className="text-gray-600 text-sm">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>
//           </div>

//           {/* Second pricing card */}
//           <div className="bg-white rounded-xl p-6 shadow-sm">
//             <div className="flex justify-between items-start mb-4">
//               <span className="text-4xl font-bold">$229</span>
//               <div className="flex items-center rounded-full px-3 py-2 bg-[#ECFDF3] text-green-600 text-sm font-medium">
//                 <img
//                   className="w-5 h-5 mr-2"
//                   src="/magic.png"
//                   alt="Notifications interface"
//                 />
//                 Up to 25%
//               </div>
//             </div>
//             <p className="text-gray-600 text-sm">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>
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
//     </section>
//   );
// }
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

export default function NotificationsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const controls = useAnimationControls();

  // Remove hover effect entirely by setting this to false
  const enableHoverEffect = false;

  // Responsive animation settings
  const responsiveVariants = {
    mobile: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    tablet: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    desktop: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      // Animate price counters
      const duration = 1500;
      const startTime = Date.now();
      const endPrice1 = 129;
      const endPrice2 = 229;

      const updatePrices = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setPrice1(Math.floor(endPrice1 * easeOutQuart));
        setPrice2(Math.floor(endPrice2 * easeOutQuart));

        if (progress < 1) {
          requestAnimationFrame(updatePrices);
        }
      };

      requestAnimationFrame(updatePrices);

      // Start other animations
      controls.start("visible");
    }
  }, [isInView, controls]);

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
    responsive: responsiveVariants,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row bg-[#F6F6F6] pt-10"
    >
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={imageVariants}
      >
        <img
          src="/Notifications.svg"
          alt="Notifications interface"
          className="max-w-full h-auto"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="inline-block w-fit px-4 py-2 rounded-full bg-[#EBEFF5] text-[#202939] text-sm font-medium mb-6"
          variants={itemVariants}
        >
          Notifications
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-3.5xl font-medium text-gray-900 mb-6"
          variants={itemVariants}
        >
          Real time notifications on
          <br />
          account activity
        </motion.h2>

        <motion.p className="text-gray-600 mb-8" variants={itemVariants}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
        >
          {/* First pricing card */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm"
            variants={cardVariants}
          >
            <div className="flex justify-between items-start mb-4">
              <motion.span className="text-4xl font-bold">
                ${price1}
              </motion.span>
              <motion.div
                className="flex items-center rounded-full px-3 py-2 bg-[#ECFDF3] text-green-600 text-sm font-medium"
                variants={badgeVariants}
                animate={isInView ? pulseAnimation : {}}
              >
                <motion.img
                  className="w-5 h-5 mr-2"
                  src="/magic.png"
                  alt="Magic icon"
                  initial={{ rotate: 0 }}
                  animate={isInView ? { rotate: [0, 15, -15, 0] } : {}}
                  transition={{
                    duration: 1,
                    delay: 1,
                    repeat: 1,
                    repeatType: "reverse",
                  }}
                />
                Up to 25%
              </motion.div>
            </div>
            <motion.p className="text-gray-600 text-sm" variants={itemVariants}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.p>
          </motion.div>

          {/* Second pricing card */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm"
            variants={cardVariants}
          >
            <div className="flex justify-between items-start mb-4">
              <motion.span className="text-4xl font-bold">
                ${price2}
              </motion.span>
              <motion.div
                className="flex items-center rounded-full px-3 py-2 bg-[#ECFDF3] text-green-600 text-sm font-medium"
                variants={badgeVariants}
                animate={isInView ? pulseAnimation : {}}
              >
                <motion.img
                  className="w-5 h-5 mr-2"
                  src="/magic.png"
                  alt="Magic icon"
                  initial={{ rotate: 0 }}
                  animate={isInView ? { rotate: [0, 15, -15, 0] } : {}}
                  transition={{
                    duration: 1,
                    delay: 1.2,
                    repeat: 1,
                    repeatType: "reverse",
                  }}
                />
                Up to 25%
              </motion.div>
            </div>
            <motion.p className="text-gray-600 text-sm" variants={itemVariants}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.p>
          </motion.div>
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
    </section>
  );
}
