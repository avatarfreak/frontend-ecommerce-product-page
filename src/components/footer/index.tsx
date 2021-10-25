import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-xs text-center md:mt-20">
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge">
        <a target="_blank" rel="noopener noreferrer" className="text-pri-100">
          Frontend Mentor
        </a>
      </Link>
      . Coded by
      <Link href="https://www.github.com/avatarfreak">
        <a target="_blank" rel=" noopener noreferrer" className="text-pri-100">
          {" "}
          avatarfreak
        </a>
      </Link>
      .
    </footer>
  );
};

export default Footer;
