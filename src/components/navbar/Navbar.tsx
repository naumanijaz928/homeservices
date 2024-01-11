import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div>Logo</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
