import React from "react";
import { navLinks } from "@/utils/data";
import Link from "next/link";
import AIAssistant from "../assistant/AIAssistant";
import NavbarMenu from "./Menu";
import Descend from "../animations/Descend";
import Header2 from "../headings/Header2";

function Navbar() {
  return (
    <header className="py-4 flex justify-between items-center sticky top-0 bg-background z-50">
      <div>
        <Link href={"/"}>
          <Header2 text="JM" className="font-sans-bold" />
        </Link>
      </div>
      <nav className="flex items-center gap-2 sm:gap-4">
        <ul className="hidden sm:flex items-center gap-4">
          {navLinks.map((nav) => {
            return (
              <li
                key={nav.title}
                className="uppercase text-sm font-sans-medium"
              >
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            );
          })}
        </ul>
        <AIAssistant />
        <div className="block sm:hidden">
          <NavbarMenu />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
