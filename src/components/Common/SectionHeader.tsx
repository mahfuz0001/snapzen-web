"use client";

import React from "react";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center"
      >
        <div className="bg-zumthor dark:bg-blacksection dark:border-strokedark px-4.5 mb-4 inline-block rounded-full py-1.5 dark:border">
          <h4 className="text-sectiontitle font-medium text-black dark:text-white">
            {title}
          </h4>
        </div>
        <h2 className="xl:text-sectiontitle3 mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2">
          {subtitle}
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
