"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CampaignBanner() {
  return (
    <section id="luxury-pret" className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
              <Image
                src="/images/img6.jpeg"
                alt="Luxury Pret Collection"
                fill
                className="object-cover object-[50%_20%]"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 md:w-32 h-20 md:h-32 border border-accent hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8 order-1 lg:order-2"
          >
            <p className="text-xs md:text-sm tracking-[0.3em] text-accent uppercase mb-3 md:mb-4">
              Limited Edition
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4 md:mb-6 leading-tight">
              The Festive
              <span className="italic block">Edit 2026</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-lg">
              Introducing our exclusive festive collection, where traditional craftsmanship 
              meets contemporary design. Each piece is meticulously crafted to make you 
              stand out at every celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
              <Link
                href="#"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 md:gap-3 bg-foreground text-background px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase hover:bg-accent transition-all duration-300 w-full sm:w-auto"
              >
                Shop the Collection
                <ArrowRight className="w-3 md:w-4 h-3 md:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 md:gap-3 border border-foreground text-foreground px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300 w-full sm:w-auto"
              >
                View Lookbook
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 pt-6 md:pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground block">50+</span>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Exclusive<br className="sm:hidden" /> Pieces</p>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground block">100%</span>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Handcrafted</p>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground block">7</span>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">Day<br className="sm:hidden" /> Delivery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
