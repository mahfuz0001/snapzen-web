"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="lg:pb-25 xl:pb-30 overflow-hidden pb-20">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="lg:gap-32.5 flex items-center gap-8">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                <span className="bg-meta text-metatitle px-4.5 mb-4 mr-4 inline-flex rounded-full py-1 uppercase text-white ">
                  New
                </span>{" "}
                Discord bot to easily
              </h4>
              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                Personalize{" "}
                <span className="before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 relative inline-block before:absolute before:bottom-2.5 before:left-0 before:h-3 before:w-full">
                  Growth
                </span>{" "}
                Paths
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    React 18, Next.js 13 and TypeScript
                  </h5>
                  <p>Ut ultricies lacus non fermentum ultrices.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    Fully Customizable
                  </h5>
                  <p>consectetur adipiscing elit fermentum ultricies.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="max-w-c-1235 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="lg:gap-32.5 flex items-center gap-8">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Dashboard to see
              </h4>
              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                Mindful Insights and
                <span className="before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1 relative ml-2.5 inline-block before:absolute before:bottom-2.5 before:left-0 before:h-3 before:w-full">
                  Reflections
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>
              <div>
                <a
                  href="#"
                  className="mt-7.5 hover:text-primary dark:hover:text-primary flex items-center gap-2.5 text-black dark:text-white"
                >
                  <span className="duration-500 hover:pr-2">Know More</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:hidden"
                  >
                    <path
                      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                      fill="currentColor"
                    />
                  </svg>

                  <svg
                    className="hidden dark:block"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4766 6.16664L6.00658 1.69664L7.18492 0.518311L13.6666 6.99998L7.18492 13.4816L6.00658 12.3033L10.4766 7.83331H0.333252V6.16664H10.4766Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
