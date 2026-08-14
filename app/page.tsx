import FormatContainer from "@/components/containers/FormatContainer";
import About from "@/components/pages/home/About";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";

export default function Home() {
  return (
    <FormatContainer>
      <>
        <Hero/>
        <About/>
        <Services/>
      </>
    </FormatContainer>
  );
}
