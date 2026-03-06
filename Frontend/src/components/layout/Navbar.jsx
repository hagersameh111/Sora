import { brand } from "../../config/brand"
import { useState, useEffect, useRef } from "react"
import { Globe } from "lucide-react"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const lastScrollY = useRef(0)
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en"
    i18n.changeLanguage(newLang)
  }

  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr"
  }, [i18n.language])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      if (isOpen || currentY <= 8) {
        setIsNavVisible(true)
        lastScrollY.current = currentY
        return
      }

      const delta = currentY - lastScrollY.current

      if (Math.abs(delta) < 8) return

      if (delta > 0 && currentY > 60) {
        setIsNavVisible(false)
      } else {
        setIsNavVisible(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  return (
    <>
    <nav
      className={`fixed top-0 left-0 z-[9999] w-full bg-[var(--color-navbar)] border-b border-[var(--color-primary)] transition-transform duration-300 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >

      <div className="max-w-screen-xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-4">
          <img
            src={brand.logo.value}
            alt={brand.name}
            className="h-12"
          />

          <div className="leading-tight">
            <h1 className="text-[26px] tracking-[0.3em] text-[var(--color-primary)] font-light">
              {brand.name}
            </h1>
            <p className="text-[10px] tracking-[0.5em] text-[var(--color-primary)]">
              {brand.subName}
            </p>
          </div>
        </div>

        {/* RIGHT DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3A3A3A]">

          <a className="text-[var(--color-primary)] font-semibold">
            {t("nav.home")}
          </a>

          <a>{t("nav.services")}</a>

          <a>{t("nav.policies")}</a>

          <a
            href={`https://wa.me/${brand.contact.whatsapp}`}
            className="ml-4 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full text-sm"
          >
            {t("nav.book")}
          </a>

          <Globe
            onClick={toggleLanguage}
            className="w-5 h-5 text-black ml-3 cursor-pointer"
          />

        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden flex items-center gap-3">
          <button
            aria-label="Toggle language"
            className="p-1"
            onClick={toggleLanguage}
          >
            <Globe className="w-5 h-5 text-black" />
          </button>

          <button
            className="text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-5 text-sm font-medium bg-[var(--color-navbar)]">

          <a onClick={() => setIsOpen(false)}>
            {t("nav.home")}
          </a>

          <a onClick={() => setIsOpen(false)}>
            {t("nav.services")}
          </a>

          <a onClick={() => setIsOpen(false)}>
            {t("nav.policies")}
          </a>

          <a
            href={`https://wa.me/${brand.contact.whatsapp}`}
            className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-full text-sm text-center"
          >
            {t("nav.book")}
          </a>

        </div>
      )}
    </nav>
    <div className="h-[97px]" />
    </>
  )
}

export default Navbar
