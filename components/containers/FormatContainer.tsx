import { cn } from "@/lib/utils";
import React from "react";

function FormatContainer({
  children,
  className,
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return (
    <div className={cn("pt-[8vh] pb-[4vh] flex flex-col gap-14", className)}>
      {children}
    </div>
  );
}

export default FormatContainer;
