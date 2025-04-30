"use client";
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full lg:min-h-[100vh] md:min-h-[80vh] min-h-[80vh]  overflow-hidden  ">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <img
          src="/b.svg"
          alt="Background"
          className="w-full h-full   md:object-cover lg:object-cover sm:object-fill object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24 md:py-22 text-center flex items-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Manage Your Finances
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Easier Than Ever
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <motion.button
              className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get started
            </motion.button>

            <motion.button
              className="bg-white text-gray-900 px-8 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors w-full sm:w-auto"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
