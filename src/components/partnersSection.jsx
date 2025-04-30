"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PartnersSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-16 md:py-20 text-center"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-6"
          variants={itemVariants}
        >
          In partnership with the top
          <br />
          fintech companies
        </motion.h2>

        <motion.p
          className="text-[#697586] mb-12 max-w-2xl mx-auto font-normal"
          variants={itemVariants}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12"
          variants={containerVariants}
        >
          {/* Partner Logo 1 */}
          <motion.div
            className="flex items-center text-gray-500"
            variants={logoVariants}
            whileHover={{
              scale: 1.05,
              color: "#4B5563",
              transition: { duration: 0.2 },
            }}
          >
            <motion.img
              className="w-5 h-5 mr-2"
              src="/cl1.png"
              alt="Notifications interface"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            />
            <span className="text-xl font-medium">Logoipsum</span>
          </motion.div>

          {/* Partner Logo 2 */}
          <motion.div
            className="flex items-center text-gray-500"
            variants={logoVariants}
            whileHover={{
              scale: 1.05,
              color: "#4B5563",
              transition: { duration: 0.2 },
            }}
          >
            <motion.img
              className="w-5 h-5 mr-2"
              src="/cl2.png"
              alt="Notifications interface"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            />
            <span className="text-xl font-medium">Logoipsum</span>
          </motion.div>

          {/* Partner Logo 3 */}
          <motion.div
            className="flex items-center text-gray-500"
            variants={logoVariants}
            whileHover={{
              scale: 1.05,
              color: "#4B5563",
              transition: { duration: 0.2 },
            }}
          >
            <motion.img
              className="w-5 h-5 mr-2"
              src="/cl3.png"
              alt="Notifications interface"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            />
            <span className="text-xl font-medium">
              logoipsum<sup>+</sup>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={containerVariants}
        >
          <motion.button
            className="px-8 py-3 rounded-full border border-gray-300 hover:border-gray-400 transition-colors w-full sm:w-auto"
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
            className="flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors w-full sm:w-auto"
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
              initial={{ x: 0 }}
              animate={{ x: isInView ? [0, 5, 0] : 0 }}
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
