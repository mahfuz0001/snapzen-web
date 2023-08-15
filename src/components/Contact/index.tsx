"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 pb-20 md:px-8 2xl:px-0">
        <div className="max-w-c-1390 lg:pt-15 px-7.5 lg:px-15 relative mx-auto overflow-hidden pt-10 xl:px-20 xl:pt-20">
          <div className="-z-1 absolute left-0 top-0 h-2/3 w-full rounded-lg bg-gradient-to-t from-[#fff] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
          <div className="-z-1 absolute bottom-[-255px] left-0 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
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
              className="animate_top shadow-solid-8 dark:border-strokedark p-7.5 xl:p-15 w-full rounded-lg bg-white dark:border dark:bg-black md:w-3/5 lg:w-3/4"
            >
              <h2 className="xl:text-sectiontitle2 mb-15 text-3xl font-semibold text-black dark:text-white">
                Send a message
              </h2>

              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="gap-7.5 mb-7.5 flex flex-col lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="border-stroke dark:border-strokedark focus:border-waterloo dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="border-stroke dark:border-strokedark focus:border-waterloo dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="gap-7.5 mb-12.5 flex flex-col lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border-stroke dark:border-strokedark focus:border-waterloo dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    placeholder="Phone number"
                    className="border-stroke dark:border-strokedark focus:border-waterloo dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="border-stroke dark:border-strokedark focus:border-waterloo dark:focus:border-manatee w-full border-b bg-transparent focus:placeholder:text-black focus-visible:outline-none dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap xl:justify-between ">
                  <div className="mb-4 flex md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="mt-2 h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="flex max-w-[425px] cursor-pointer select-none pl-5 text-sm"
                    >
                      By clicking Checkbox, you agree to use our “Form” terms
                      And consent cookie usage in browser.
                    </label>
                  </div>

                  <button
                    aria-label="send message"
                    className="hover:bg-blackho dark:bg-btndark inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out"
                  >
                    Send Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

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
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top md:p-7.5 xl:pt-15 w-full md:w-2/5 lg:w-[26%]"
            >
              <h2 className="xl:text-sectiontitle2 mb-12.5 text-3xl font-semibold text-black dark:text-white">
                Find us
              </h2>

              <div className="5 mb-7">
                <h4 className="text-metatitle3 mb-4 font-medium text-black dark:text-white">
                  Our Loaction
                </h4>
                <p>290 Maryam Springs 260, Courbevoie, Paris, France</p>
              </div>
              <div className="5 mb-7">
                <h4 className="text-metatitle3 mb-4 font-medium text-black dark:text-white">
                  Email Address
                </h4>
                <p>
                  <a href="#">yourmail@domainname.com</a>
                </p>
              </div>
              <div>
                <h4 className="text-metatitle3 mb-4 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+009 42334 6343 843</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
