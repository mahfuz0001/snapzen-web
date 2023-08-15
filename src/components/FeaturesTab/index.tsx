"use client";

import React, { useState } from "react";
import Image from "next/image";
import featuresTabData from "./featuresTabData";
import FeaturesTabItem from "./FeaturesTabItem";

import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="pt-18.5 lg:pb-22.5 relative pb-20">
        <div className="max-w-c-1390 relative mx-auto px-4 md:px-8 2xl:px-0">
          <div className="-z-1 absolute -top-16 mx-auto h-[350px] w-[90%]">
            <Image
              fill
              className="dark:hidden"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <Image
              fill
              className="hidden dark:block"
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>

          {/* <!-- Tab Menues Start --> */}
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top border-stroke dark:border-strokedark dark:bg-blacksection shadow-solid-5 dark:shadow-solid-6 lg:gap-7.5 xl:gap-12.5 mb-15 xl:mb-21.5 flex flex-wrap justify-center rounded-[10px] border bg-white md:flex-nowrap md:items-center"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`border-stroke dark:border-strokedark xl:px-13.5 relative flex w-full cursor-pointer items-center gap-4 border-b px-6 py-2 last:border-0 md:w-auto md:border-0 xl:py-5 ${
                currentTab === "tabOne"
                  ? "active before:bg-primary before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px]"
                  : ""
              }`}
            >
              <div className="w-12.5 h-12.5 border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center rounded-[50%] border">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  01
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <h5 className="xl:text-regular text-sm font-medium text-black dark:text-white">
                  Clean User Interface
                </h5>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`border-stroke dark:border-strokedark xl:px-13.5 relative flex w-full cursor-pointer items-center gap-4 border-b px-6 py-2 last:border-0 md:w-auto md:border-0 xl:py-5 ${
                currentTab === "tabTwo"
                  ? "active before:bg-primary before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px]"
                  : ""
              }`}
            >
              <div className="w-12.5 h-12.5 border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center rounded-[50%] border">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  02
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <h5 className="xl:text-regular text-sm font-medium text-black dark:text-white">
                  Essential Business Pages
                </h5>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`border-stroke dark:border-strokedark xl:px-13.5 relative flex w-full cursor-pointer items-center gap-4 border-b px-6 py-2 last:border-0 md:w-auto md:border-0 xl:py-5 ${
                currentTab === "tabThree"
                  ? "active before:bg-primary before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px]"
                  : ""
              }`}
            >
              <div className="w-12.5 h-12.5 border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center rounded-[50%] border">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  03
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <h5 className="xl:text-regular text-sm font-medium text-black dark:text-white">
                  Fully Functional Integrations
                </h5>
              </div>
            </div>
          </motion.div>
          {/* <!-- Tab Menues End --> */}

          {/* <!-- Tab Content Start --> */}
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
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top max-w-c-1154 mx-auto"
          >
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </motion.div>
          {/* <!-- Tab Content End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;
