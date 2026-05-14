"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const collections = [
  {
    id: 1,
    name: "Classic Ebony ",
    description: "Ready To Wear",
    image: "/images/img1.png",
    href: "#",
  },
  {
    id: 2,
    name: "Royal Aurelia",
    description: "Ready To Wear",
    image: "/images/img2.png",
    href: "#",
  },
  {
    id: 3,
    name: "Urban Ethnic",
    description: "Ready To Wear",
    image: "/images/img3.png",
    href: "#",
  },
  {
    id: 4,
    name: "Golden Dusk",
    description: "Ready To Wear",
    image: "/images/img4.png",
    href: "#",
  },
]

export function Collections() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-background">
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
            Explore Our
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
            Summer Collections
          </h2>
          <div className="w-24 h-px bg-accent mx-auto" />
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={collection.href} className="group block relative overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className={`object-cover ${index === 0 || index === 1 || index === 2 || index === 3 ? "object-[50%_20%]" : "object-center"} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs tracking-[0.2em] text-primary-foreground/80 uppercase mb-2">
                        {collection.description}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-serif text-primary-foreground">
                        {collection.name}
                      </h3>
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center border border-primary-foreground/50 text-primary-foreground group-hover:bg-primary-foreground group-hover:text-foreground transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
