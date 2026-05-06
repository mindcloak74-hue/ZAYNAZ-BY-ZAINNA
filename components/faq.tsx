"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping within Pakistan takes 3-5 business days. Express delivery (1-2 days) is available in major cities. International shipping takes 7-14 business days depending on the destination.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 7 days of delivery for unworn items with original tags attached. Please note that sale items are final sale. Exchanges are subject to availability.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship internationally! Shipping costs and delivery times vary by location. Please contact us for specific rates to your country.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you will receive a confirmation email with tracking information. You can also track your order by logging into your account or contacting our customer service.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, JazzCash, EasyPaisa, and Cash on Delivery (COD). For international orders, we accept major credit cards.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer:
      "You can modify or cancel your order within 1 hour of placing it. Please contact our customer service immediately. Once the order is processed, changes cannot be made.",
  },
  {
    question: "Do you offer custom sizing?",
    answer:
      "Yes! We offer custom sizing on select items. Please contact us with your measurements, and our team will assist you with creating a perfectly fitted garment.",
  },
  {
    question: "How do I care for my garments?",
    answer:
      "Care instructions are included on the label of each garment. Generally, we recommend dry cleaning for embroidered and formal pieces. For casual wear, hand wash in cold water and air dry.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Got Questions?
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-px bg-accent mx-auto" />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-background"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-serif text-lg text-foreground pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-accent text-accent">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
