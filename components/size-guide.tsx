"use client"

import { motion } from "framer-motion"

const sizes = [
  { size: "XS", bust: "32", waist: "24", hips: "34" },
  { size: "S", bust: "34", waist: "26", hips: "36" },
  { size: "M", bust: "36", waist: "28", hips: "38" },
  { size: "L", bust: "38", waist: "30", hips: "40" },
  { size: "XL", bust: "40", waist: "32", hips: "42" },
  { size: "XXL", bust: "42", waist: "34", hips: "44" },
]

export function SizeGuide() {
  return (
    <section id="size-guide" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Find Your Perfect Fit
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-6">
            Size Guide
          </h2>
          <div className="w-24 h-px bg-accent mx-auto" />
        </motion.div>

        {/* Size Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                  Size
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                  Bust (inches)
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                  Waist (inches)
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                  Hips (inches)
                </th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((row, index) => (
                <tr
                  key={row.size}
                  className={`border-b border-border ${
                    index % 2 === 0 ? "bg-secondary/50" : ""
                  }`}
                >
                  <td className="py-4 px-6 font-serif text-lg text-foreground">
                    {row.size}
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">{row.bust}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.waist}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Measurement Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-secondary"
        >
          <h3 className="font-serif text-xl text-foreground mb-4">
            How to Measure
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center bg-accent text-accent-foreground text-sm flex-shrink-0">
                1
              </span>
              <span>
                <strong className="text-foreground">Bust:</strong> Measure around the fullest part of your bust, 
                keeping the tape parallel to the floor.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center bg-accent text-accent-foreground text-sm flex-shrink-0">
                2
              </span>
              <span>
                <strong className="text-foreground">Waist:</strong> Measure around your natural waistline, 
                the narrowest part of your torso.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center bg-accent text-accent-foreground text-sm flex-shrink-0">
                3
              </span>
              <span>
                <strong className="text-foreground">Hips:</strong> Measure around the fullest part of your hips, 
                keeping the tape parallel to the floor.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            For custom sizing or any questions, please{" "}
            <a href="#contact" className="text-accent underline">
              contact us
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
