import Appear from "@/components/animations/Appear";
import Header6 from "@/components/headings/Header6";
import SectionTitle from "@/components/titles/SectionTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { awards } from "@/utils/data";
import { orderDate } from "@/utils/helpers";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Award from "@/public/images/home/award.jpg";
import ExposeY from "@/components/animations/ExposeY";

function Awards() {
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle text={`awards ( ${awards.length} )`} />
      <div>
        <Appear>
          <Table className="border-b border-b-foreground">
            <TableHeader>
              <TableRow className="font-sans-medium">
                <TableHead className="md:w-40">Year</TableHead>
                <TableHead className="hidden sm:table-cell">Awarded</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right md:w-32"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderDate(awards).map((award) => (
                <TableRow key={award.name} className="text-xl">
                  <TableCell className="py-4 md:w-40">
                    <Header6 text={award.year} />
                  </TableCell>
                  <TableCell className="hidden sm:table-cell capitalize py-4">
                    <Header6 text={award.title_awarded} />
                  </TableCell>
                  <TableCell className="py-4">
                    <Header6 text={award.name} />
                  </TableCell>
                  <TableCell className=" py-4 md:w-32 flex justify-end">
                    <Link href={award.website}>
                      <ArrowUpRight className="size-6" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Appear>
      </div>
      <div className="flex justify-end">
        <div className="max-w-96">
          <ExposeY>
            <Image
              src={Award}
              alt="laptop on a brown suede chair"
              className="object-top object-cover"
            />
          </ExposeY>
        </div>
      </div>
    </section>
  );
}

export default Awards;
