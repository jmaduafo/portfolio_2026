import React from "react";

function FormatContainer({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="pt-[8vh] pb-[4vh] flex flex-col gap-14">{children}</div>
  );
}

export default FormatContainer;
