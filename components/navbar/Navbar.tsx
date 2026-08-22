import React from "react";
import { navLinks } from "@/utils/data";
import Link from "next/link";
import Header3 from "../headings/Header3";
import AIAssistant from "../assistant/AIAssistant";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="py-4 flex justify-between items-center sticky top-0 bg-background z-50">
      <div>
        <Link href={"/"}>
          <Header3 text="JM" className="font-sans-bold" />
        </Link>
      </div>
      <nav className="flex items-center gap-4">
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
        <button className="sm:hidden">
          <Menu className="size-6" strokeWidth={2} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
