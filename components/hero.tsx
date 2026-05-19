"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[105vh] sm:min-h-[110vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/img31.png"
          alt="Luxury fashion collection"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-foreground/15" />
      </div>

    </section>
  )
}
