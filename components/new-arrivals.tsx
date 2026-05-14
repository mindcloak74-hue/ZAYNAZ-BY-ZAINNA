"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Gul-e-bahaar",
    price: 4500,
    originalPrice: 7000,
    image: "/images/img7.png",
    category: "Soft Lawn",
    isNew: true,
  },
  {
    id: 2,
    name: "Jahanara  Dress",
    price: 5700 ,
    image: "/images/img8.jpeg",
    category: "Pure Rose Silk",
    isNew: true,
  },
  {
    id: 3,
    name: "Afsha",
    price: 8400,
    image: "/images/img9.png",
    category: "Fabric Silk",
    isNew: true,
  },
  {
    id: 4,
    name: "Sammar",
    price: 6999,
    originalPrice: 8999,
    image: "/images/img10.jpeg",
    category: "Cotton lawn",
    isNew: true,
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  }).format(price)
}

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="py-24 md:py-32 bg-secondary">
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
            Coming Soon
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
            New Arrivals
          </h2>
          <div className="w-24 h-px bg-accent mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href="#" className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Badges */}
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-foreground text-background text-xs tracking-wider px-3 py-1 uppercase">
                      New
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs tracking-wider px-3 py-1 uppercase">
                      Sale
                    </span>
                  )}
                  {/* Quick Actions */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      className="flex-1 bg-background/95 backdrop-blur-sm text-foreground py-3 text-xs tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2"
                      aria-label="Add to bag"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Add to Bag
                    </button>
                    <button
                      className="w-12 bg-background/95 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs tracking-wider text-muted-foreground uppercase mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-foreground font-medium">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground line-through text-sm">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View All New Arrivals
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
