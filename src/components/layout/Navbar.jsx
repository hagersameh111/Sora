import { branding } from "../../config/branding"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-[var(--color-navbar)] shadow-sm px-6">
      
      {/* TOP BAR */}
      <div className="flex items-center justify-between py-4 max-w-screen-xl mx-auto">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          <img
            src={branding.logo}
            alt={branding.name}
            className="h-10"
          />
          <span className="font-semibold text-lg">
            {branding.name}
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Book Now (always visible) */}
          <a
            href={`https://wa.me/${branding.whatsapp}`}
            className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-full text-sm"
          >
            Book Now
          </a>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm font-medium bg-[var(--color-navbar)]">
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}

    </nav>
  )
}

export default Navbar