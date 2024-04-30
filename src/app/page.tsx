// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./feature";
import Docu from "./DocumentosElectronicos";
import Corre from "./CorreoElectronico";
import { IconButton } from "@material-tailwind/react";

//componente principal
export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Docu />
      <Corre />
      {/* 
      <MobileConvenience />
      <Testimonials />
    
      <Faqs />
        */}

      <Footer />
    </>
  );
}
