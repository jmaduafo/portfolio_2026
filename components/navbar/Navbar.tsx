import React from "react";
import { navLinks } from "@/utils/data";
import Link from "next/link";
import { Button } from "../ui/button";
import Header3 from "../headings/Header3";

function Navbar() {
  return (
    <header className="py-4 flex justify-between items-center">
      <div>
        <Link href={"/"}>
          <Header3 text="JM" className="font-sans-bold" />
        </Link>
      </div>
      <nav>
        <ul className="flex items-center gap-4">
          {navLinks.map((nav) => {
            return nav.title !== "contact" ? (
              <li
                key={nav.title}
                className="uppercase text-sm font-sans-medium"
              >
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ) : (
              <Link href={nav.href} key={nav.title}>
                <Button className={"font-sans-medium"} variant={"outline"}>
                  Contact me
                </Button>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
