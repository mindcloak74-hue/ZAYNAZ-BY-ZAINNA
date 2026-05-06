"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles, Heart, Shield, Truck } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Only the finest fabrics and materials",
  },
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description: "Each piece tells a story",
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "100% original designs",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Free shipping on orders above PKR 10,000",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6 leading-tight">
              Where Tradition Meets
              <span className="italic block">Modern Elegance</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a passion for celebrating the modern woman, Zaynaz by Zainna 
                brings you a curated collection of luxury fashion that embodies confidence, 
                elegance, and timeless style.
              </p>
              <p>
                Every piece in our collection is thoughtfully designed to make you feel 
                extraordinary. From intricate eastern embroidery to sleek western silhouettes, 
                we blend tradition with contemporary aesthetics.
              </p>
              <p>
                Our commitment to quality is unwavering. We source only the finest fabrics 
                and work with skilled artisans who pour their heart into every stitch, 
                ensuring each garment is a masterpiece.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-serif text-2xl italic text-foreground mb-2">
                Zainna
              </p>
              <p className="text-sm text-muted-foreground tracking-wide">
                Founder & Creative Director
              </p>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/images/about-1.jpg"
                    alt="Zaynaz craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src="/images/about-2.jpg"
                    alt="Zaynaz design"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[3/5] relative overflow-hidden">
                  <Image
                    src="/images/about-3.jpg"
                    alt="Zaynaz collection"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent hidden lg:block" />
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-accent text-accent">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
