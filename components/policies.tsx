"use client"

import { motion } from "framer-motion"
import { Truck, RefreshCcw, Shield, CreditCard } from "lucide-react"

const policies = [
  {
    icon: Truck,
    title: "Shipping & Delivery",
    id: "shipping",
    items: [
      "Free shipping on orders above PKR 10,000",
      "Standard delivery: 3-5 business days",
      "Express delivery: 1-2 business days (major cities)",
      "Same-day delivery available in Lahore, Karachi, and Islamabad",
      "International shipping: 7-14 business days",
      "Real-time order tracking via SMS and email",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Returns & Exchange",
    id: "returns",
    items: [
      "7-day return policy from delivery date",
      "Items must be unworn with original tags attached",
      "Free returns on exchanges within Pakistan",
      "Refunds processed within 5-7 business days",
      "Sale items are final sale (no returns)",
      "Custom-made items cannot be returned",
    ],
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    id: "quality",
    items: [
      "100% authentic and original designs",
      "Premium quality fabrics and materials",
      "Expert craftsmanship on every piece",
      "Quality check before dispatch",
      "Secure and protective packaging",
      "Satisfaction guaranteed",
    ],
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    id: "payments",
    items: [
      "Visa and Mastercard accepted",
      "JazzCash and EasyPaisa mobile payments",
      "Cash on Delivery (COD) available",
      "Bank transfer option",
      "SSL encrypted checkout",
      "No hidden charges",
    ],
  },
]

export function Policies() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Shop with Confidence
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
            Our Policies
          </h2>
          <div className="w-24 h-px bg-accent mx-auto" />
        </motion.div>

        {/* Policies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.id}
              id={policy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center border border-accent text-accent">
                  <policy.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">
                  {policy.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {policy.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
