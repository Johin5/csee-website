/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosSparkles from "./components/LogosSparkles";
import DashboardPreview from "./components/DashboardPreview";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { TextHoverEffect } from "./components/ui/text-hover-effect";

export default function App() {
  return (
    <div className="min-h-screen bg-secondary-blue text-white font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <LogosSparkles />
        <DashboardPreview />
        <Features />
        <Steps />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <div className="h-[20rem] md:h-[40rem] flex items-center justify-center bg-secondary-blue overflow-hidden">
        <TextHoverEffect text="CHNC" />
      </div>
      <Footer />
    </div>
  );
}
