import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Testimonials() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div className="text-sm w-fit mx-auto bg-[#EBEFF5] text-gray-600 mb-2 px-4 py-1 rounded-full">
            What customers say
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Customer testimonials
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { name: "Orlando Diggs", image: "/a1.png" },
            { name: "Mollie Hall", image: "/a2.png" },
            { name: "Lori Bryson", image: "/a3.png" },
            { name: "Customer Name", image: "/a4.png" },
          ].map((person, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex text-orange-400 mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden mr-3">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{person.name}</p>
                  <p className="text-sm text-gray-500">
                    Position, Company name
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
