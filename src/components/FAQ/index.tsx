"use client";
import React, { useState } from "react";
import faqData from "./faqData";
import FAQItem from "./FAQItem";
import Image from "next/image";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="lg:pb-25 xl:pb-30 overflow-hidden pb-20">
        <div className="max-w-c-1235 relative mx-auto px-4 md:px-8 xl:px-0">
          <div className="-z-1 absolute -bottom-16 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="xl:gap-32.5 flex flex-wrap gap-8 md:flex-nowrap md:items-center">
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
              className="animate_left md:w-2/5 lg:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                OUR FAQS
              </h4>
              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                Frequently Asked
                <span className="before:bg-titlebg2 dark:before:bg-titlebgdark before:-z-1 relative inline-block before:absolute before:bottom-2.5 before:left-0 before:h-3 before:w-full">
                  Questions
                </span>
              </h2>

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
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
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
              className="animate_right md:w-3/5 lg:w-1/2"
            >
              <div className="dark:bg-blacksection dark:border-strokedark shadow-solid-8 rounded-lg bg-white dark:border">
                {faqData.map((faq, key) => (
                  <FAQItem
                    key={key}
                    faqData={{ ...faq, activeFaq, handleFaqToggle }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
