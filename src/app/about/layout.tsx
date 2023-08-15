import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "About SnapZen",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
