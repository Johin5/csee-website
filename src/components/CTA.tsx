import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-secondary-blue">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-black p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/20 to-transparent blur-3xl"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-white/20 to-transparent blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-sm font-display font-bold tracking-widest uppercase text-black/60 mb-6">
              TAKE THE CHNC
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tight mb-6">
              Not every brand gets
              <br />
              the opportunity.
            </h3>
            <p className="text-black/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              CHNC helps you create it. Let’s build something extraordinary together.
            </p>
            <button className="bg-black text-white px-8 py-4 text-base font-medium hover:bg-black/90 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto">
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
