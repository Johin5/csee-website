import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What does ConvergenSEE actually do?",
    answer:
      "We are a unified marketing intelligence agency. We identify the opportunities brands overlook—from UI/UX friction to missing local presence—and fix them with data-driven solutions.",
  },
  {
    question: "What is the CHNC platform?",
    answer:
      "CHNC is our proprietary platform that helps brands create opportunity where it was previously missing, unifying all marketing channels into a single source of truth.",
  },
  {
    question: "How do you improve conversion rates?",
    answer:
      "We focus on the full funnel. By fixing UI/UX issues, optimizing local search presence, and deploying high-performance creative, we ensure that the traffic you get actually converts.",
  },
  {
    question: "Do you handle local marketing for multiple locations?",
    answer:
      "Yes, local presence management is one of our core strengths. We build SEO-friendly location pages and manage listings across 1.3M+ global locations to ensure you're found in the final mile.",
  },
  {
    question: "Can you help with brand reputation?",
    answer:
      "Absolutely. Our Online Reputation Management services ensure that reviews and social conversations work for your brand, not against it.",
  },
  {
    question: "How do I get started with ConvergenSEE?",
    answer:
      "The best way to start is to 'Take the CHNC'. Contact us for a consultation where we'll identify the overlooked opportunities in your current digital strategy.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-secondary-green">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-display font-bold tracking-widest uppercase text-primary mb-4">
            FAQS
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold uppercase tracking-tight">
            Got questions?
            <br />
            We've got answers.
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border overflow-hidden transition-colors ${openIndex === index ? "border-primary/50 bg-secondary-blue" : "border-white/10"}`}
            >
              <button
                className="w-full px-6 py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-display font-semibold uppercase text-lg">{faq.question}</span>
                <span className="ml-4 shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/60" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-white/60 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-white/60">
          Is your question not listed here? Please get in touch at{" "}
          <a
            href="mailto:hello@example.com"
            className="text-primary underline underline-offset-4"
          >
            hello@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
