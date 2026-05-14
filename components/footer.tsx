"use client"

import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Best Sellers", href: "#best-sellers" },
    { name: "Collections", href: "#collections" },
    { name: "Luxury Pret", href: "#luxury-pret" },
    { name: "Sale", href: "#" },
  ],
  help: [
    { name: "Size Guide", href: "#size-guide" },
    { name: "Shipping & Delivery", href: "#shipping" },
    { name: "Returns & Exchange", href: "#returns" },
    { name: "FAQ", href: "#faq" },
    { name: "Track Order", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
}

const paymentMethods = [
  "Visa",
  "Mastercard",
  "JazzCash",
  "EasyPaisa",
  "COD",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-3xl font-serif font-semibold tracking-wider">
                ZAYNAZ
              </h2>
              <p className="text-xs tracking-[0.3em] text-background/60 uppercase">
                by Zainna
              </p>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Discover luxury women&apos;s fashion that celebrates confidence, 
              elegance, and modern femininity. Premium quality, timeless style.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/zaynaz_by_zainna"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center border border-background/30 hover:border-background hover:bg-background hover:text-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@zaynaz_by_zainna"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center border border-background/30 hover:border-background hover:bg-background hover:text-foreground transition-all duration-300"
                aria-label="TikTok"
              >
                <svg
                  fill="#ffffff"
                  viewBox="0 0 32 32"
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>tiktok</title>
                  <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-background/60 flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                 Lahore, Pakistan
                </span>
              </li>
              <li>
                <Link
                  href="tel:+923001234567"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-5 h-5 text-background/60" />
                  +92 331 4379335
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:zsrathore700@gmail.com"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5 text-background/60" />
                  zsrathore700@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} Zaynaz by Zainna. All rights reserved.
          </p>
          
          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-background/60">We accept:</span>
            <div className="flex items-center gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="text-xs text-background/70 bg-background/10 px-2 py-1"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
