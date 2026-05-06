"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    location: "Karachi",
    image: "/images/testimonial-1.jpg",
    rating: 5,
    text: "Absolutely in love with my purchase! The quality exceeded my expectations. The embroidery work is exquisite and the fit is perfect. Will definitely be ordering again.",
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    location: "Lahore",
    image: "/images/testimonial-2.jpg",
    rating: 5,
    text: "Zaynaz has become my go-to for festive wear. Every piece feels so luxurious and the customer service is exceptional. Highly recommend!",
  },
  {
    id: 3,
    name: "Sana Malik",
    location: "Islamabad",
    image: "/images/testimonial-3.jpg",
    rating: 5,
    text: "The attention to detail is remarkable. I wore their anarkali to a wedding and received so many compliments. The fabric quality is outstanding.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
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
            What Our Customers Say
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
            Client Love
          </h2>
          <div className="w-24 h-px bg-accent mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/30 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16 pt-16 border-t border-border"
        >
          <div className="text-center">
            <span className="text-4xl md:text-5xl font-serif text-foreground">5000+</span>
            <p className="text-sm text-muted-foreground mt-2">Happy Customers</p>
          </div>
          <div className="text-center">
            <span className="text-4xl md:text-5xl font-serif text-foreground">4.9</span>
            <p className="text-sm text-muted-foreground mt-2">Average Rating</p>
          </div>
          <div className="text-center">
            <span className="text-4xl md:text-5xl font-serif text-foreground">98%</span>
            <p className="text-sm text-muted-foreground mt-2">Repeat Customers</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
