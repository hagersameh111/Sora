import { useState, useEffect } from "react"
import Container from "../../ui/Container"

const reviews = [
  {
    id: 1,
    name: "Aigars Silkans",
    text: "This is my first time getting a facial and Shaima did not disappoint! Her energy was amazing.",
    rating: 3,
  },
  {
    id: 2,
    name: "Maria Johnson",
    text: "Absolutely loved the experience! The environment was calming and the results were visible immediately.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lina Ahmed",
    text: "Professional, clean, and so relaxing. I will definitely book again!",
    rating: 4,
  },
]

const Reviews = () => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [paused])

  const firstReview = reviews[current]
  const secondReview = reviews[(current + 1) % reviews.length]

  return (
    <section className="py-32 bg-[#FFFEFC] overflow-hidden">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-[86px] leading-[0.95] font-semibold text-[var(--color-primary-soft)] mb-12">
              CUSTOMERS<br />REVIEWS
            </h2>

            <p className="text-[36px] leading-[1.6] text-[#7A7472] max-w-[500px]">
              See what our customers think about our services
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            <div className="relative w-[520px] h-[800px]">
              <img
                src="/review.jpg"
                alt=""
                className="w-full h-full object-cover rounded-[40px]"
              />

              {/* TOP CARD */}
              <ReviewCard
                review={firstReview}
                position="top"
                setPaused={setPaused}
              />

              {/* BOTTOM CARD */}
              <ReviewCard
                review={secondReview}
                position="bottom"
                setPaused={setPaused}
              />

            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}

const ReviewCard = ({ review, position, setPaused }) => {
  const positionStyles =
    position === "top"
      ? "absolute top-[120px] left-[-60px]"
      : "absolute bottom-[120px] right-[-60px]"

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={`
        ${positionStyles}
        w-[650px]
        bg-[#5A4A43]/60
        backdrop-blur-xl
        text-white
        rounded-[40px]
        p-10
        shadow-2xl
        transition-transform duration-500
        hover:scale-105
      `}
    >
      <h4 className="text-2xl font-semibold mb-6">
        {review.name}
      </h4>

      <p className="text-base leading-relaxed mb-8">
        {review.text}
      </p>

      <div className="flex justify-center gap-6 text-2xl">
        {[1,2,3,4,5].map((star) => (
          <span
            key={star}
            className={
              star <= review.rating
                ? "text-yellow-400"
                : "text-white/40"
            }
          >
            ★
          </span>
        ))}
      </div>
    </div>
  )
}

export default Reviews