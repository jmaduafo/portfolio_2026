import React, { Fragment } from "react";
import Header2 from "../headings/Header2";
import { Copyright } from "lucide-react";
import { navLinks, socialLinks } from "@/utils/data";
import Paragraph from "../headings/Paragraph";
import SmallParagraph from "../headings/SmallParagraph";
import Link from "next/link";

function Footer() {
  return (
    <footer id="contact" className="py-4 px-3 flex flex-col gap-3 bg-foreground text-background">
      <div className="uppercase flex justify-between items-start gap-5 flex-wrap">
        <div className="flex items-start gap-5 flex-wrap">
          <ul>
            {navLinks.map((nav) => {
              return (
                <li key={nav.title}>
                  <Link href={nav.href}>{nav.title}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            {socialLinks.map((social) => {
              return social.title.toLowerCase() !== "email" ? (
                <li key={social.title}>
                  <a target="_blank" rel="noopener noreferrer">
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
        <div className="flex flex-col items-end">
          <SmallParagraph text="Based in Chicago, IL" />
          <SmallParagraph text="Designed and developed by" />
          <SmallParagraph text="Jasmine Maduafokwa" />
        </div>
      </div>
      <div className="uppercase font-sans-bold flex items-center justify-end gap-3">
        <Header2 text="Portfolio" />
        <Copyright className="size-12" />
        <Header2 text="2026" />
      </div>
    </footer>
  );
}

export default Footer;
