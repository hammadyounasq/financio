"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BenefitsSection() {
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

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const benefits = [
    {
      icon: "/payment.png",
      title: "Streamlined payments",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: "/pie.png",
      title: "Accelerate your savings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: "/piggy.png",
      title: "Built for growth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row pt-16 bg-gray-50"
    >
      <motion.div
        className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`flex flex-col md:flex-row md:items-start gap-4 ${
                index !== benefits.length - 1
                  ? "pb-8 border-b border-gray-200"
                  : ""
              }`}
            >
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FBE8FF] rounded-full flex items-center justify-center text-purple-600 shrink-0"
                variants={iconVariants}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <motion.img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-4 h-4 sm:w-5 sm:h-5 object-cover"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex items-end justify-center pb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/payments.svg"
          alt="Financial benefits"
          className="max-w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
}
