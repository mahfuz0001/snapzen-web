"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`z-99999 fixed left-0 top-0 w-full py-7 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="max-w-c-1390 relative mx-auto items-center justify-between px-4 md:px-8 lg:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between lg:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block lg:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="w-5.5 h-5.5 relative block cursor-pointer">
              <span className="absolute block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : ""
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : ""
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : ""
                  }`}
                ></span>
              </span>
              <span className="absolute block h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-0 w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    navigationOpen ? "h-full delay-[0]" : ""
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-[.03rem] block h-0 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    navigationOpen ? "dealy-200 h-0.5" : ""
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-full ${
            navigationOpen &&
            "dark:bg-blacksection shadow-solid-5 p-7.5 !visible mt-4 h-auto max-h-[400px] overflow-y-scroll rounded-md bg-white"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <a
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="hover:text-primary flex cursor-pointer items-center justify-between gap-3"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="fill-waterloo group-hover:fill-primary h-3 w-3 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </a>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "hover:text-primary text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 lg:mt-0">
            <ThemeToggler />

            <Link
              href="https://github.com/NextJSTemplates/snapzen-nextjs"
              className="text-waterloo text-regular hover:text-primary font-medium"
            >
              Sign In
            </Link>

            <Link
              href="https://nextjstemplates.com/templates/snapzen"
              className="bg-primary hover:bg-primaryho text-regular px-7.5 flex items-center justify-center rounded-full py-2.5 text-white duration-300 ease-in-out"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
