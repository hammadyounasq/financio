"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function HowItWorks() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 bg-purple-50"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block text-purple-600 text-sm font-medium mb-2">
            Simple process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            How it works
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16"
          variants={containerVariants}
        >
          {[1, 2, 3].map((step) => {
            const titles = [
              "Save, Invest & Track",
              "Send payment",
              "Track profit",
            ];
            return (
              <motion.div
                key={step}
                className="bg-white rounded-lg p-4 sm:p-6 shadow-sm"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center mb-4">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-medium mb-4"
                    variants={itemVariants}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold text-center"
                    variants={itemVariants}
                  >
                    {titles[step - 1]}
                  </motion.h3>
                </div>
                <motion.p
                  className="text-gray-600 text-center"
                  variants={itemVariants}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius.
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center max-w-xl mx-auto"
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <motion.button
            className="px-6 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact us
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
