import React, { Fragment } from "react";
import Header2 from "../headings/Header2";
import { Copyright } from "lucide-react";
import { navLinks, socialLinks } from "@/utils/data";
import Paragraph from "../headings/Paragraph";
import SmallParagraph from "../headings/SmallParagraph";
import Link from "next/link";
import PopUp from "../animations/PopUp";

function Footer() {
  return (
    <footer
      id="contact"
      className="py-4 px-3 flex flex-col gap-3 bg-foreground text-background"
    >
      <div className="w-full uppercase flex flex-col sm:flex-row justify-between items-start gap-5">
        <div className="w-full flex justify-center items-center sm:justify-start sm:items-start gap-8 sm:gap-5">
          <ul className="flex flex-col justify-center items-center sm:justify-baseline sm:items-start">
            {navLinks.map((nav) => {
              return (
                <li key={nav.title}>
                  <Link href={nav.href}>{nav.title}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-col justify-center items-center sm:justify-start sm:items-start">
            {socialLinks.map((social) => {
              return social.title.toLowerCase() !== "email" ? (
                <li key={social.title}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.title}
                  </a>
                </li>
              ) : (
                <li key={social.title}>
                  <a href={`mailto:${social.href}`}>{social.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col w-full items-center justify-center sm:justify-start sm:items-end">
          <SmallParagraph text="Based in Chicago, IL" />
          <SmallParagraph text="Designed and developed by" />
          <SmallParagraph text="Jasmine Maduafokwa" />
        </div>
      </div>
      <PopUp>
        <div className="uppercase font-sans-bold flex items-center justify-center sm:justify-end gap-3">
          <Header2 text="Portfolio" />
          <Copyright className="size-12" />
          <Header2 text="2026" />
        </div>
      </PopUp>
    </footer>
  );
}

export default Footer;
