"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const topSizes = [
  { size: "S", chest: "18", length: "According to Design", sleeves: "21", shoulders: "13" },
  { size: "M", chest: "20", length: "According to Design", sleeves: "22", shoulders: "14" },
  { size: "L", chest: "22", length: "According to Design", sleeves: "23", shoulders: "15" },
  { size: "XL", chest: "24", length: "According to Design", sleeves: "23", shoulders: "16" },
]

const trouserSizes = [
  { size: "S", waist: "30", length: "37" },
  { size: "M", waist: "32", length: "38" },
  { size: "L", waist: "34", length: "40" },
  { size: "XL", waist: "37", length: "40" },
]

export function SizeGuide() {
  const [activeTab, setActiveTab] = useState<"tops" | "trousers">("tops")

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

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab("tops")}
            className={`px-6 py-2 text-sm font-medium tracking-widest uppercase transition-all ${
              activeTab === "tops"
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            Tops & Shirts
          </button>
          <button
            onClick={() => setActiveTab("trousers")}
            className={`px-6 py-2 text-sm font-medium tracking-widest uppercase transition-all ${
              activeTab === "trousers"
                ? "bg-accent text-accent-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            Trousers
          </button>
        </motion.div>

        {/* Size Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          {activeTab === "tops" && (
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                    Size
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                    Chest (inches)
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                    Length
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                    Sleeves (inches)
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                    Shoulders (inches)
                  </th>
                </tr>
              </thead>
              <tbody>
                {topSizes.map((row, index) => (
                  <tr
                    key={row.size}
                    className={`border-b border-border ${
                      index % 2 === 0 ? "bg-secondary/50" : ""
                    }`}
                  >
                    <td className="py-4 px-6 font-serif text-lg text-foreground">
                      {row.size}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{row.chest}</td>
                    <td className="py-4 px-6 text-muted-foreground">{row.length}</td>
                    <td className="py-4 px-6 text-muted-foreground">{row.sleeves}</td>
                    <td className="py-4 px-6 text-muted-foreground">{row.shoulders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === "trousers" && (
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                    Size
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                    Waist (inches)
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-medium tracking-widest uppercase text-foreground">
                    Length (inches)
                  </th>
                </tr>
              </thead>
              <tbody>
                {trouserSizes.map((row, index) => (
                  <tr
                    key={row.size}
                    className={`border-b border-border ${
                      index % 2 === 0 ? "bg-secondary/50" : ""
                    }`}
                  >
                    <td className="py-4 px-6 font-serif text-lg text-foreground">
                      {row.size}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{row.waist}</td>
                    <td className="py-4 px-6 text-muted-foreground">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </motion.div>

        {/* Measurement Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-secondary"
        >
          <h3 className="font-serif text-xl text-foreground mb-6">
            How to Measure
          </h3>
          
          {activeTab === "tops" && (
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-accent text-accent-foreground text-sm flex-shrink-0">
                  1
                </span>
                <span>
                  <strong className="text-foreground">Chest:</strong> Measure around the fullest part of your chest, 
                  keeping the tape parallel to the floor.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-accent text-accent-foreground text-sm flex-shrink-0">
                  2
                </span>
                <span>
                  <strong className="text-foreground">Sleeves:</strong> Measure from the middle back shoulder point down to your wrist.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-accent text-accent-foreground text-sm flex-shrink-0">
                  3
                </span>
                <span>
                  <strong className="text-foreground">Shoulders:</strong> Measure from one shoulder point to the other across the back.
                </span>
              </li>
            </ul>
          )}

          {activeTab === "trousers" && (
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-accent text-accent-foreground text-sm flex-shrink-0">
                  1
                </span>
                <span>
                  <strong className="text-foreground">Waist:</strong> Measure around your natural waistline, 
                  the narrowest part of your torso.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-accent text-accent-foreground text-sm flex-shrink-0">
                  2
                </span>
                <span>
                  <strong className="text-foreground">Length:</strong> Measure from the top of the waistband to your desired hem length.
                </span>
              </li>
            </ul>
          )}
          
          <p className="mt-6 text-sm text-muted-foreground">
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
