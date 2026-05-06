"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

const posts = [
  { id: 1, image: "/images/insta-1.jpg", likes: 1247 },
  { id: 2, image: "/images/insta-2.jpg", likes: 892 },
  { id: 3, image: "/images/insta-3.jpg", likes: 1583 },
  { id: 4, image: "/images/insta-4.jpg", likes: 2104 },
  { id: 5, image: "/images/insta-5.jpg", likes: 756 },
  { id: 6, image: "/images/insta-6.jpg", likes: 1891 },
]

export function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Follow Us
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
            @zaynaz_byzainna
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Join our community and be the first to see new arrivals, 
            styling inspiration, and behind-the-scenes moments.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href="https://instagram.com"
                target="_blank"
                className="group block relative aspect-square overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="https://instagram.com"
            target="_blank"
            className="inline-flex items-center gap-3 border border-foreground text-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
