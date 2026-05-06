"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] text-background/70 uppercase mb-4">
              Stay Connected
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Join the Zaynaz Family
            </h2>
            <p className="text-background/80 mb-10 leading-relaxed">
              Subscribe to our newsletter for exclusive access to new arrivals, 
              special offers, and styling tips. Be the first to know about our 
              limited edition collections.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-transparent border border-background/30 px-6 py-4 text-background placeholder:text-background/50 focus:outline-none focus:border-background transition-colors"
              required
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className="flex items-center justify-center gap-2 bg-background text-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-accent transition-all duration-300 disabled:opacity-70"
            >
              {isSubmitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-background/60 mt-6"
          >
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
