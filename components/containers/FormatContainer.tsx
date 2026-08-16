import React from "react";

function FormatContainer({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="mt-[8vh] mb-[4vh] flex flex-col gap-12">{children}</div>
  );
}

export default FormatContainer;
