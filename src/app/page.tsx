"use client";

import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
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
    </main>
  );
}
