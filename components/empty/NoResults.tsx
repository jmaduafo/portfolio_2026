import React from "react";
import { ArrowUpRight, FolderX, X } from "lucide-react";
import Header6 from "../headings/Header6";
import Paragraph from "../headings/Paragraph";
import { Button } from "../ui/button";
import Link from "next/link";

function NoResults({
  text,
  buttonText,
  buttonLink,
}: {
  readonly text: string;
  readonly buttonText?: string;
  readonly buttonLink?: string;
}) {
  return (
    <div className="flex justify-center items-center w-full py-30">
      <div className="p-8 rounded-xl shadow-xl border border-foreground flex flex-col gap-6 items-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="absolute top-[55%] left-1/2 transform -translate-1/2 z-10">
              <X className="size-12 text-background" />
            </div>
            <FolderX fill="#541513" className="size-30" strokeWidth={1} />
          </div>
          <Paragraph text={text} className="" />
        </div>
        {buttonText && buttonLink && (
          <Link href={buttonLink}>
            <Button size={"lg"} variant={"outline"}>
              {buttonText} <ArrowUpRight className="size-6" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NoResults;
