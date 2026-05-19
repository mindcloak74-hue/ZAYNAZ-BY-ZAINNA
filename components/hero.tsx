"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[105vh] lg:min-h-[110vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/img32.png"
          alt="Luxury fashion collection"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-foreground/20 md:bg-foreground/15" />
      </div>

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block text-xs md:text-sm tracking-[0.3em] text-white uppercase mb-3 md:mb-4 px-4 md:px-6 py-2 md:py-3 bg-black rounded-full font-semibold"
        >
          EID WEAR
        </motion.p>
        
        <motion.h1 id="dastan-collection"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-4 md:mb-6 leading-tight tracking-tight drop-shadow-lg"
        >
          <span className="block">DASTAN</span>
          <span className="italic block text-white/90 text-2xl md:text-3xl tracking-wider mt-1">COLLECTION</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block text-sm md:text-base lg:text-lg text-white mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 bg-black rounded-full font-semibold tracking-wide"
        >
          Embroidered Lawn
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
        >
          <Link
            href="#dastan-collection"
            className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-black text-white px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase hover:bg-accent transition-all duration-300 w-full sm:w-auto"
          >
            Shop Now
            <ArrowRight className="w-3 md:w-4 h-3 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#collections"
            className="inline-flex items-center justify-center gap-2 md:gap-3 border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-foreground transition-all duration-300 w-full sm:w-auto"
          >
            Explore Collections
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-white/60 tracking-widest uppercase">Scroll</p>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
