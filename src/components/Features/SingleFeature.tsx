import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top shadow-solid-3 p-7.5 xl:p-12.5 hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 rounded-lg border border-white bg-white transition-all"
      >
        <div className="bg-primary relative flex h-16 w-16 items-center justify-center rounded-[4px]">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="xl:text-itemtitle mt-7.5 mb-5 text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p>{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
