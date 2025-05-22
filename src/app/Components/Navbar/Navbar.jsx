"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  if (!pathname.includes("dashboard")) {
    return (
      <nav className="max-w-7xl mx-auto bg-gray-500 text-white py-3.5 px-4">
        <ul className="lg:flex hidden justify-center items-center gap-10">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/service">
            <li>Services</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/posts">
            <li>Posts</li>
          </Link>
          <Link href="/meals">
            <li>Meals</li>
          </Link>
          <Link href="/products">
            <li>Products</li>
          </Link>
          <Link href="/admin-dashboard">
            <li>Dashboard</li>
          </Link>
        </ul>
      </nav>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
