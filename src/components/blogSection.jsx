import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BlogSection() {
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
    hidden: { opacity: 0, scale: 0.95 },
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
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="text-sm  w-fit  px-4 py-2 font-medium rounded-full bg-[#EBEFF5] text-gray-700 mb-2">
              Blog
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Our latest blogs
            </h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-full border border-gray-300"
          >
            View all
          </a>
        </div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {[1, 2, 3, 4].map((index) => {
            const blogData = [
              {
                image: "/b1.png",
                alt: "Piggy bank",
                bg: "bg-pink-200",
                tag: "Investments",
                title: "How much should I have saved in my 401 (k) by age?",
                author: "Lana Steiner",
                avatar: "/a5.png",
              },
              {
                image: "/b2.png",
                alt: "Modern architecture",
                bg: "bg-blue-200",
                tag: "Investments",
                title:
                  "Reason to get whole life insurance even though it's more expensive",
                author: "Ava Wright",
                avatar: "/a6.png",
              },
              {
                image: "/b3.png",
                alt: "Person typing on laptop",
                bg: "bg-gray-800",
                tag: "Education",
                title: "How much money do the top income earners make?",
                author: "Lana Steiner",
                avatar: "/a7.png",
              },
              {
                image: "/b4.png",
                alt: "US Dollar bills",
                bg: "bg-gray-200",
                tag: "Investments",
                title: "How to retire early and never have to work again",
                author: "Ava Wright",
                avatar: "/a8.png",
              },
            ][index - 1];

            return (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg  lg:h-[270px] md:h-[290px] sm:h-[400px]"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className={`md:w-2/5 ${blogData.bg}`}>
                  <img
                    src={blogData.image}
                    alt={blogData.alt}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col h-full">
                  <div>
                    <div className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full mb-3">
                      {blogData.tag}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{blogData.title}</h3>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden mr-3">
                        <img
                          src={blogData.avatar}
                          alt={blogData.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">{blogData.author}</p>
                        <p className="text-gray-500">
                          June 8, 2022 • 7 min read
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium"
                    >
                      Read more
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors px-4 py-2 rounded-full border border-gray-300"
          >
            View all
          </a>
        </div>
      </motion.div>
    </section>
  );
}
