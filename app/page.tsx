import FormatContainer from "@/components/containers/FormatContainer";
import About from "@/components/pages/home/About";
import Awards from "@/components/pages/home/Awards";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import Works from "@/components/pages/home/Works";

export default function Home() {
  return (
    <FormatContainer>
      <>
        <Hero/>
        <About/>
        <Services/>
        <Works/>
        <Awards/>
      </>
    </FormatContainer>
  );
}
