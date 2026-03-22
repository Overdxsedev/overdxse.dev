'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold hover:opacity-80 transition">
            <span className="text-trans-blue">over</span>
            <span className="text-trans-dark">dose</span>
            <span className="text-trans-blue">.dev</span>
          </a>
          
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="text-sm hover:text-trans-dark transition">about</a>
            <a href="#skills" className="text-sm hover:text-trans-dark transition">skills</a>
            <a href="#projects" className="text-sm hover:text-trans-dark transition">projects</a>
            <a href="#contact" className="text-sm hover:text-trans-dark transition">contact</a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-trans-blue hover:text-trans-dark transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-3">
            <a href="#about" className="block text-sm hover:text-trans-dark transition">about</a>
            <a href="#skills" className="block text-sm hover:text-trans-dark transition">skills</a>
            <a href="#projects" className="block text-sm hover:text-trans-dark transition">projects</a>
            <a href="#contact" className="block text-sm hover:text-trans-dark transition">contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
