"use client";

import React from "react";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="lg:py-25 xl:py-30 py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "SNAPZEN FEATURES",
              subtitle: "Core Features of SnapZen",
              description: `Unlocking Your Potential - Explore the Key Features of SnapZen's Transformative AI Platform.`,
            }}
          />
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
