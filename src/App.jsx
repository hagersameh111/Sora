import Navbar from "./components/layout/Navbar"
import { theme } from "./config/theme"

function App() {
  return (
    <div
      style={{
        "--color-primary": theme.colors.primary,
        "--color-primary-soft": theme.colors.primarySoft,
        "--color-navbar": theme.colors.navbarBg,
        "--color-background": theme.colors.background,
        "--color-text-main": theme.colors.textMain,
        "--color-text-dark": theme.colors.textDark,
      }}
      className="min-h-screen bg-[var(--color-background)]"
    >
      <Navbar />
    </div>
  )
}

export default App