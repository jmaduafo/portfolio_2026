"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { navLinks } from "@/utils/data";
import Link from "next/link";
import { motion } from "framer-motion";

function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger
        render={
          <Button variant={"ghost"} className="">
            <Menu className="size-6" strokeWidth={1.5} />
          </Button>
        }
      />
      <SheetContent className={isOpen ? "delay-0" : "delay-500"}>
        <SheetHeader>
          <div className="sr-only">
            <SheetTitle>Navbar Menu</SheetTitle>
            <SheetDescription>
              This displays the navbar menu for user navigation in the mobile
              view
            </SheetDescription>
          </div>
        </SheetHeader>
        <ul className="h-full flex flex-col justify-center gap-1 text-[10vw] leading-none font-sans-medium uppercase p-6">
          {navLinks.map((nav) => {
            return (
              <li
                key={nav.title}
                onClick={() => setIsOpen(false)}
                className="overflow-hidden"
              >
                <motion.span
                  className="inline-flex"
                  initial={{ y: isOpen ? "100%" : "0%" }}
                  animate={{
                    y: isOpen ? "0%" : "100%",
                    transition: { duration: 0.4, delay: isOpen ? 0.5 : 0 },
                  }}
                >
                  <Link href={`${nav.href}`}>{nav.title}</Link>
                </motion.span>
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarMenu;
