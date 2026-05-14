"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CampaignBanner() {
  return (
    <section id="luxury-pret" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/img6.jpeg"
                alt="Luxury Pret Collection"
                fill
                className="object-cover object-[50%_20%]"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4">
              Limited Edition
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6 leading-tight">
              The Festive
              <span className="italic block">Edit 2026</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Introducing our exclusive festive collection, where traditional craftsmanship 
              meets contemporary design. Each piece is meticulously crafted to make you 
              stand out at every celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm tracking-widest uppercase hover:bg-accent transition-all duration-300"
              >
                Shop the Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-3 border border-foreground text-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View Lookbook
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <span className="text-3xl md:text-4xl font-serif text-foreground">50+</span>
                <p className="text-sm text-muted-foreground mt-1">Exclusive Pieces</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-serif text-foreground">100%</span>
                <p className="text-sm text-muted-foreground mt-1">Handcrafted</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-serif text-foreground">7</span>
                <p className="text-sm text-muted-foreground mt-1">Day Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
