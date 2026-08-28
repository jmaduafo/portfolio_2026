import React from "react";
import { cn } from "@/lib/utils";

function Header1({
  children,
  className,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return <h1 className={cn("text-5xl lg:text-[64px] 2xl:text-8xl leading-none font-sans-medium", className)}>{children}</h1>
}

export default Header1;
