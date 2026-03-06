import { useEffect, useState } from "react";

const text = "Where Skincare feels intentional";

const SplashScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setVisible(true);

    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(typeInterval);
      }
    }, 50); // speed of typing

    // Start fade out after 3s
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    // Finish after fade animation
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2700);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-footer-bg)]">
      <div className="text-center">
        
        {/* LOGO (fade only) */}
        <img
          src="/soralogo.svg"
          alt="Sora Aesthetics"
          className={`mx-auto w-60 transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* TEXT (typewriter effect only) */}
        <p className="mt-6 text-[var(--color-accent)] text-xl italic tracking-wide min-h-[28px]">
          {displayedText}
        </p>

      </div>
    </div>
  );
};

export default SplashScreen;