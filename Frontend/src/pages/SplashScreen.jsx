import { useEffect, useState } from "react"
import { brand } from "../config/brand"

const text = "Where Skincare feels intentional"

const SplashScreen = ({ onFinish }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [fade, setFade] = useState(false)

  useEffect(() => {
    let index = 0

    const typeInterval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1))
      index++
      if (index === text.length) clearInterval(typeInterval)
    }, 45)

    // preload hero images
    brand.data.heroSlides.forEach(slide => {
      const main = new Image()
      main.src = slide.main

      const secondary = new Image()
      secondary.src = slide.secondary
    })

    // preload hero component
    const loadHero = import("../components/HomeSections/Hero/Hero")

    Promise.all([
      loadHero,
      new Promise(resolve => setTimeout(resolve, 2800))
    ]).then(() => {
      setFade(true)

      setTimeout(() => {
        onFinish()
      }, 700)
    })

    return () => {
      clearInterval(typeInterval)
    }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-footer-bg)] transition-opacity duration-700 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">

        <img
          src="/soralogo.svg"
          alt="Sora Aesthetics"
          className={`mx-auto w-64 transition-all duration-[2000ms] ease-out ${
            fade ? "scale-105 opacity-0" : "scale-100 opacity-100"
          }`}
        />

        <p className="mt-6 text-[var(--color-accent)] text-xl italic tracking-wide min-h-[28px]">
          {displayedText}
        </p>

      </div>
    </div>
  )
}

export default SplashScreen