import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FlickeringGrid } from "./ui/flickering-grid";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.1}
          color="rgb(52, 204, 50)"
          maxOpacity={0.1}
          className="opacity-20"
        />
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-sm font-medium mb-8"
        >
          <span className="flex h-2 w-2 bg-primary"></span>
          NEW: 2025 JUNE UPDATE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative text-5xl md:text-7xl lg:text-[80px] font-display font-extrabold uppercase tracking-tight leading-[1.1] mb-6"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[200%] pointer-events-none -z-10 overflow-visible">
            <svg viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40">
              <path d="M0 300C250 100 750 100 1000 300" stroke="url(#hero-curve-grad)" strokeWidth="2" />
              <path d="M0 300C250 100 750 100 1000 300" stroke="url(#hero-curve-grad)" strokeWidth="12" strokeOpacity="0.1" filter="blur(8px)" />
              <defs>
                <linearGradient id="hero-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="20%" stopColor="#34CC32" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#34CC32" />
                  <stop offset="80%" stopColor="#34CC32" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          We create what
          <br />
          brands overlook
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10"
        >
          Your story doesn’t have to end before it begins.
          <br />
          Let’s create it together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-primary text-black px-8 py-4 text-base font-medium hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
            Join waitlist
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/5 mt-12"
        >
          <div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-primary mb-1">111M+</div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Customer Actions</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-primary mb-1">1.3M+</div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Global Listings</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-primary mb-1">62%</div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Avg. Engagement</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-primary mb-1">53%</div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Lower CPL</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
