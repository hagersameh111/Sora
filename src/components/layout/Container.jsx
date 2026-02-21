const Container = ({ children, wide = false }) => {
  return (
    <div
      className={`
        ${wide ? "max-w-screen-xl" : "max-w-6xl"}
        mx-auto
        px-4
      `}
    >
      {children}
    </div>
  )
}

export default Container