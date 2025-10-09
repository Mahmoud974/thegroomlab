"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "FAQ" },
  ]

  return (
    <nav className="pt-8">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={250}
          height={250}
          priority
        />

        {/* Liens du menu */}
        <ul className="flex space-x-10 text-base bg-purple-700/20 backdrop-blur-md px-10 py-4  ">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    relative px-8 py-2  font-semibold transition-all duration-300
                    ${isActive ? 'bg-orange-500 text-white' : 'text-white hover:bg-orange-500 hover:text-white'}
                  `}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Bouton contact */}
        <Button
          variant="default"
          className="text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3 transition-all"
        >
          Contact
        </Button>
      </div>
    </nav>
  )
}
