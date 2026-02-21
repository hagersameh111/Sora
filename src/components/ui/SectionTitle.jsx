const SectionTitle = ({ label, title, subtitle, align = "left" }) => {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={`mb-12 ${alignment}`}>
      {label && (
        <p className="text-sm tracking-widest uppercase text-[var(--color-primary)] mb-2">
          {label}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-semibold text-[var(--color-accent)]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-xl text-[var(--color-text-main)]">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle