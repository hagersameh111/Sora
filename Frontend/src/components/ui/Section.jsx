const Section = ({ children, className = "" }) => {
  return (
    <section className={`py-20 md:py-30 ${className}`}>
      {children}
    </section>
  )
}

export default Section