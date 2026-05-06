"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search, ShoppingBag, User, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "New Arrivals", href: "#new-arrivals" },
  { name: "Collections", href: "#collections" },
  { name: "Best Sellers", href: "#best-sellers" },
  { name: "Luxury Pret", href: "#luxury-pret" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation - Left */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-widest uppercase text-foreground hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif font-semibold tracking-wider text-foreground">
              ZAYNAZ
            </h1>
            <p className="text-[10px] tracking-[0.3em] text-muted-foreground text-center uppercase">
              by Zainna
            </p>
          </Link>

          {/* Desktop Navigation - Right */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-widest uppercase text-foreground hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 text-foreground hover:text-accent transition-colors hidden sm:block"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-foreground hover:text-accent transition-colors hidden sm:block"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-foreground hover:text-accent transition-colors hidden sm:block"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-foreground hover:text-accent transition-colors relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="px-4 py-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium tracking-widest uppercase text-foreground hover:text-accent transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                  <Search className="w-5 h-5" />
                  <span className="text-sm tracking-wide">Search</span>
                </button>
                <button className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm tracking-wide">Wishlist</span>
                </button>
                <button className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
                  <User className="w-5 h-5" />
                  <span className="text-sm tracking-wide">Account</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
