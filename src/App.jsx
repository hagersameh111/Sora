import Navbar from "./components/layout/Navbar"
import { brand } from "./config/brand"
import Footer from "./components/layout/Footer"

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
        "--color-footer": brand.theme.colors.footerBg,
        "--color-footer-title": brand.theme.colors.footerTitle,
        "--color-footer-text": brand.theme.colors.footerText,
        "--color-footer-copyright": brand.theme.colors.footerCopyright,
      }}
      className="min-h-screen bg-[var(--color-background)]"
    >
      <Navbar />
      <Footer />
    </div>
  )
}

export default App