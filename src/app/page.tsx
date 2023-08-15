"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import Head from "next/head";
import * as React from "react";

export const metadata: Metadata = {
  title: "SnapZen - Your Path to Positivity",
  description: "SnapZen is the best personal companion.",
};
export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}
