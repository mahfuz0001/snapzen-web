"use client";

import ScrollUp from "@/components/Common/ScrollUp";
import Head from "next/head";
import * as React from "react";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>SnapZen - Your Path to Positivity</title>
      </Head>
      <section className="">
        <ScrollUp />
      </section>
    </main>
  );
}
