import Appear from "@/components/animations/Appear";
import PopUp from "@/components/animations/PopUp";
import FormatContainer from "@/components/containers/FormatContainer";
import Header2 from "@/components/headings/Header2";
import Header6 from "@/components/headings/Header6";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center pb-10">
      <PopUp>
        <p className="text-[30vw] leading-none font-sans-medium">404</p>
      </PopUp>
      <Appear>
        <Header2 text="Sorry! Page not found" className="font-sans-medium" />
      </Appear>
      {/* <Header6 className="max-w-96 text-center mt-2" text="Please make sure that the link is spelled correctly or redirect to any of the links in the navigation menu on the top right"/> */}
      <Appear>
        <Link href={"/"}>
          <Button className={"mt-8"} size={"lg"}>
            Back to home <ArrowUpRight className="size-6" />{" "}
          </Button>
        </Link>
      </Appear>
    </div>
  );
}

export default NotFound;
