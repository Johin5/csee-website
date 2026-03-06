import { motion } from "motion/react";
import { Zap, Search, TrendingUp, Server } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "UI/UX Development",
    description:
      "You’re getting the clicks, but poor experience is killing conversion. We craft interfaces that customers love to use.",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "SEO & Search",
    description:
      "If you're not on page one, you're not in the game. We fix that and get you found where it matters most.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Performance Marketing",
    description:
      "Good ads get clicks. Great ones drive growth. We build for the full funnel to make your spend count.",
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "Local Presence",
    description:
      "Wrong hours and missing info cost you real customers. We fix the final mile so you're discovered, not dismissed.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-secondary-green">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-display font-bold tracking-widest uppercase text-primary mb-4">
            Solutions
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight">
            Turning opportunity
            <br />
            into impact.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-blue p-8 shadow-sm border border-white/5"
            >
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-6 text-primary">
                {feature.icon}
              </div>
              <h4 className="text-lg font-display font-semibold uppercase mb-3">{feature.title}</h4>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
