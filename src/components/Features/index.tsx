"use client";

import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="lg:py-25 xl:py-30 py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "SOLID FEATURES",
              subtitle: "Core Features of Solid",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          {/* <div className="gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mt-20"> */}
          {/* <!-- Features item Start --> */}

          {/* {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))} */}
          {/* <!-- Features item End --> */}
          {/* </div> */}
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
