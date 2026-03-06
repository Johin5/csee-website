import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Identify Missed Opportunities",
    description: "We analyze what brands overlook to find hidden potential in your digital presence.",
  },
  {
    number: "02",
    title: "Implement Data-Driven Solutions",
    description: "From UI/UX to SEO, we deploy targeted strategies that turn clicks into connections.",
  },
  {
    number: "03",
    title: "Scale with Impact",
    description:
      "Experience real growth with a unified approach that maximizes your brand's reach and revenue.",
  },
];

export default function Steps() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight mb-12">
              Create opportunity
              <br />
              in just 3 steps.
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="text-2xl font-mono font-medium text-primary/50 pt-1">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-semibold uppercase mb-2">{step.title}</h4>
                    <p className="text-white/60 text-lg">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="aspect-square bg-gradient-to-br from-secondary-green to-secondary-blue border border-white/5 overflow-hidden flex items-center justify-center p-12"
            >
              <div className="w-full h-full bg-secondary-blue shadow-xl border border-white/10 p-6 flex flex-col gap-4">
                <div className="h-8 w-1/3 bg-white/5"></div>
                <div className="h-32 w-full bg-white/5"></div>
                <div className="flex gap-4">
                  <div className="h-24 w-1/2 bg-white/5"></div>
                  <div className="h-24 w-1/2 bg-white/5"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
