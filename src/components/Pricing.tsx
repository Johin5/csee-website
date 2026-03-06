import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Growth",
    description:
      "Perfect for emerging brands looking to establish a strong digital presence.",
    price: "Custom",
    features: [
      "Local Presence Management",
      "Basic SEO Optimization",
      "Social Media Strategy",
      "Monthly Performance Reports",
    ],
    cta: "Contact Us",
    popular: false,
  },
  {
    name: "Scale",
    description:
      "Our most popular package for brands ready to dominate their market.",
    price: "Custom",
    features: [
      "Full UI/UX Development",
      "Performance Marketing Suite",
      "Reputation Management",
      "Advanced SEO & Content",
      "Priority Strategy Support",
    ],
    cta: "Take the CHNC",
    popular: true,
  },
  {
    name: "Enterprise",
    description:
      "Tailored solutions for global brands with complex requirements.",
    price: "Custom",
    features: [
      "Unified CHNC Platform Access",
      "Global Listing Management",
      "Creative Production at Scale",
      "Dedicated Account Team",
      "Custom API Integrations",
    ],
    cta: "Get in Touch",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-24 px-6 bg-black text-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-display font-bold tracking-widest uppercase text-white/40 mb-4">
            Service Packages
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight mb-6">
            Tailored Solutions.
          </h3>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            We build custom strategies based on your brand's unique overlooked opportunities.
          </p>

          <div className="inline-flex items-center p-1 bg-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 text-sm font-medium transition-colors ${!annual ? "bg-white text-black" : "text-white/60 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 text-sm font-medium transition-colors flex items-center gap-2 ${annual ? "bg-white text-black" : "text-white/60 hover:text-white"}`}
            >
              Yearly
              <span className="bg-primary text-black text-[10px] px-2 py-0.5 font-bold">
                -15%
              </span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 border ${plan.popular ? "bg-secondary-green border-primary" : "bg-white/5 border-white/10"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold uppercase tracking-widest px-4 py-1.5">
                  Popular
                </div>
              )}

              <h4 className="text-2xl font-display font-semibold uppercase mb-3">{plan.name}</h4>
              <p
                className={`mb-8 h-12 ${plan.popular ? "text-white/80" : "text-white/60"}`}
              >
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-display font-extrabold">{plan.price}</span>
              </div>

              <button
                className={`w-full py-4 font-medium transition-transform hover:scale-105 active:scale-95 mb-8 ${plan.popular ? "bg-primary text-black" : "bg-white text-black"}`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                <p
                  className={`text-sm font-semibold text-white`}
                >
                  What's included:
                </p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 ${plan.popular ? "text-primary" : "text-white"}`}
                    />
                    <span
                      className={`text-sm text-white/80`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
