"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="pt-35 xl:pt-46 xl:pb-25 overflow-hidden pb-20 md:pt-40">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="xl:gap-32.5 flex lg:items-center lg:gap-8">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                SnapZen - A Complete SaaS Web Template
              </h4>
              <h1 className="xl:text-hero mb-5 pr-16 text-3xl font-bold text-black dark:text-white ">
                Free Next.js Template for
                <span className="before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 relative ml-2.5 inline-block before:absolute before:bottom-2.5 before:left-0 before:h-3 before:w-full ">
                  SaaS
                </span>
              </h1>
              <p>
                Solid Pro - Packed with all the key integrations you need for
                swift SaaS startup launch, including - Auth, Database, Sanity
                Blog, Essential Components, Pages and More. Built-winth -
                Next.js 13, React 18 and TypeScript.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="border-stroke dark:border-strokedark shadow-solid-2 focus:border-primary dark:focus:border-primary rounded-full border px-6 py-2.5 focus:outline-none dark:bg-black dark:shadow-none"
                    />
                    <button
                      aria-label="signup to newsletter"
                      className="hover:bg-blackho dark:bg-btndark px-7.5 flex rounded-full bg-black py-2.5 text-white duration-300 ease-in-out"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="2xl:-mr-7.5 relative">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="-left-11.5 absolute top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="-right-6.5 z-1 absolute bottom-0"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="shadow-solid-l hidden dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
