import UnderlineLink from "@/components/links/UnderlineLink";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="absolute bottom-2 text-gray-700">
      © {new Date().getFullYear()} By{" "}
      <UnderlineLink href="https://snapzen.ai">SnapZen.AI</UnderlineLink>
    </footer>
  );
};

export default Footer;
