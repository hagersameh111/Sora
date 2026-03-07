const Button = ({ children, variant = "primary", className = "" }) => {
  const base =
    "px-6 py-3 rounded-[20px] font-medium transition-all duration-300"

  const styles = {
    primary:
      "bg-[var(--color-primary)] text-white hover:opacity-90",
    outline:
      "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
    soft:
      "bg-[var(--color-primary-soft)] text-white hover:opacity-90",
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  )
}

export default Button