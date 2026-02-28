import { brand } from "../../config/brand"

const Footer = () => {
  return (
    <footer className="bg-[var(--color-footer)] py-12 text-center">

      <div className="flex flex-col items-center ">

        {/* Name */}
        <h2 className="text-3xl tracking-[0.2em] text-[var(--color-footer-title)] font-light">
          {brand.name}
        </h2>

        {/* Tagline */}
        <p className="text-sm uppercase tracking-wider text-[var(--color-footer-title)]">
          {brand.tagline}
        </p>

        {/* Logo */}
        {brand.logo.type === "image" && (
          <img
            src={brand.logo.value}
            alt={brand.name}
            className="h-16 mt-4"
          />
        )}

        {/* Slogan */}
        <p className="mt-6 text-sm text-[var(--color-footer-text)]">
          {brand.footer.slogan}
        </p>

        {/* Copyright */}
        <p className="mt-4 text-xs text-[var(--color-footer-copyright)]">
          {brand.footer.copyright}
        </p>

      </div>

    </footer>
  )
}

export default Footer