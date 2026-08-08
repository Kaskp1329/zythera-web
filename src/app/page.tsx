import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { Architecture } from "@/components/sections/Architecture";
import { ExecutionDemo } from "@/components/sections/ExecutionDemo";
import { OSPreview } from "@/components/sections/OSPreview";
import { Enterprise } from "@/components/sections/Enterprise";
import { Roadmap } from "@/components/sections/Roadmap";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WaitlistModal } from "@/components/modals/WaitlistModal";
import { PromoModal } from "@/components/modals/PromoModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-pure-black">
        <Hero />
        <Capabilities />
        <Architecture />
        <ExecutionDemo />
        <OSPreview />
        <Enterprise />
        <Roadmap />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Global Modals */}
      <WaitlistModal />
      <PromoModal />
    </>
  );
}
