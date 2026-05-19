"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const dastanCollections = [
  {
    id: 23,
    name: "Gul-e-rana",
    description: "Eid Wear",
    article: "Luxrury Lawn",
    price: "6999",
    image: "/images/img23.jpeg",
    objectPosition: "50% 20%",
    href: "#",
  },
  {
    id: 24,
    name: "Gulnaar",
    description: "Eid Wear",
    article: "Embroidred Lawn",
    price: "6999",
    image: "/images/img24.jpeg",
    objectPosition: "50% 20%",
    href: "#",
  },
  {
    id: 25,
    name: "Afseen",
    description: "Eid Wear",
    article: "Embroidered lawn",
    price: "6999",
    image: "/images/img25.jpeg",
    objectPosition: "50% 20%",
    href: "#",
  },
  {
    id: 26,
    name: "Sammer",
    description: "Eid Wear",
    article: "Luxury Lawn",
    price: "6999",
    image: "/images/img26.jpeg",
    objectPosition: "50% 20%",
    href: "#",
  },
  {
    id: 27,
    name: "Sehraa",
    description: "Eid wear",
    article: "Embroidered lawn",
    price: "6999",
    image: "/images/img27.jpeg",
    objectPosition: "50% 20%",
    href: "#",
  },
  {
    id: 28,
    name: "Gulzar",
    description: "Eid Wear",
    article: "Printed Lawn",
    price: "6999",
    image: "/images/img28.jpeg",
    objectPosition: "50% 20%",
    href: "#",
  },
  {
    id: 29,
    name: "Raqs",
    description: "Eid Wear",
    article: "Viscose Embroidered",
    price: "13999",
    image: "/images/img29.jpeg",
    objectPosition: "50% 20%",
    href: "#",
  },
  {
    id: 30,
    name: "Mehermaah",
    description: "Eid Wear",
    article: "Embroidered Lawn",
    price: "6999",
    image: "/images/img30.jpeg",
    objectPosition: "50% 20%",
    href: "#",
  },
]

const summerCollections = [
  {
    id: 1,
    name: "Classic Ebony",
    description: "Ready To Wear",
    article: "Premium Lawn Suit",
    price: "₹5,499",
    image: "/images/img1.jpeg",
    objectPosition: "50% 10%",
    href: "#",
  },
  {
    id: 2,
    name: "Royal Aurelia",
    description: "Ready To Wear",
    article: "Silk Shirt & Trouser",
    price: "₹6,250",
    image: "/images/img2.jpeg",
    objectPosition: "50% 10%",
    href: "#",
  },
  {
    id: 3,
    name: "Urban Ethnic",
    description: "Ready To Wear",
    article: "Chiffon Shirt Set",
    price: "₹5,899",
    image: "/images/img3.jpeg",
    objectPosition: "50% 10%",
    href: "#",
  },
  {
    id: 4,
    name: "Golden Dusk",
    description: "Ready To Wear",
    article: "Embroidered Dupatta Set",
    price: "₹6,999",
    image: "/images/img4.jpeg",
    objectPosition: "50% 10%",
    href: "#",
  },
]

export function Collections() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Discover The New
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
            DASTAN COLLECTION
          </h2>
          <div className="w-24 h-px bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {dastanCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link href={collection.href} className="group block relative overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    style={{ objectPosition: collection.objectPosition }}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs tracking-[0.2em] text-primary-foreground/80 uppercase mb-2">
                        {collection.description}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-serif text-primary-foreground">
                        {collection.name}
                      </h3>
                      <p className="text-sm text-primary-foreground/80 mt-2">
                        {collection.article}
                      </p>
                      <p className="text-base font-semibold text-primary-foreground mt-3">
                        {collection.price}
                      </p>
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

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Explore Our
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
              Summer Collections
            </h2>
            <div className="w-24 h-px bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {summerCollections.map((collection, index) => (
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
                      style={{ objectPosition: collection.objectPosition }}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs tracking-[0.2em] text-primary-foreground/80 uppercase mb-2">
                          {collection.description}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-serif text-primary-foreground">
                          {collection.name}
                        </h3>
                        <p className="text-sm text-primary-foreground/80 mt-2">
                          {collection.article}
                        </p>
                        <p className="text-base font-semibold text-primary-foreground mt-3">
                          {collection.price}
                        </p>
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
      </div>
    </section>
  )
}
