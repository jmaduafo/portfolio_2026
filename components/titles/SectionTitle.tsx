import React from "react";
import Header6 from "../headings/Header6";
import Header5 from "../headings/Header5";
import PopUp from "../animations/PopUp";

function SectionTitle({ text }: { readonly text: string }) {
  return (
    <PopUp>
      <Header5
        className="uppercase whitespace-nowrap font-sans-medium"
        text={`/ ${text}`}
      />
    </PopUp>
  );
}

export default SectionTitle;
