import Navbar from "./components/layout/Navbar"
import { brand } from "./config/brand"

function App() {
  return (
    <div
      style={{
        "--color-primary": brand.theme.colors.primary,
        "--color-primary-soft": brand.theme.colors.primarySoft,
        "--color-navbar": brand.theme.colors.navbarBg,
        "--color-background": brand.theme.colors.background,
        "--color-text-main": brand.theme.colors.textMain,
        "--color-text-dark": brand.theme.colors.textDark,
      }}
      className="min-h-screen bg-[var(--color-background)]"
    >
      <Navbar />
    </div>
  )
}

export default App