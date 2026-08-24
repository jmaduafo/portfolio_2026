import { cn } from "@/lib/utils";
import React from "react";

function Header3({
  children,
  className,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-2xl lg:text-4xl 2xl:text-5xl leading-none",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export default Header3;
