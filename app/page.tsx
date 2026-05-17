import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyMili from "@/components/WhyMili";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import { WaIcon } from "@/components/icons";

const WA_FAB =
  "https://wa.me/6282221626313?text=Halo%20Mili!%20Saya%20ingin%20tanya%20tentang%20layanan%20perawatan%20hewan.";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyMili />
        <Services />
        <HowItWorks />
        <Testimonials />
        <About />
        <CTABanner />
      </main>
      <Footer />

      {/* WhatsApp FAB — mobile only */}
      <a
        href={WA_FAB}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-wa"
        aria-label="Chat WhatsApp"
      >
        <WaIcon size={28} />
      </a>

      {/* Scroll animation observer */}
      <ScrollAnimations />
    </>
  );
}
