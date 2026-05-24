import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problema from "@/components/Problema";
import Servicios from "@/components/Servicios";
import Proceso from "@/components/Proceso";
import SobreIan from "@/components/SobreIan";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Servicios />
        <Proceso />
        <SobreIan />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
