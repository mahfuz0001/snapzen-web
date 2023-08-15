"use client";

import About from "@/components/About";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "SnapZen - Your Path to Positivity",
  description: "SnapZen is the best personal companion.",
};
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      <Contact />
    </main>
  );
}
