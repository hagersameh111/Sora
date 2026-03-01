import Container from "../../ui/Container"

const placeholderImages = [
  "/hijab1.jpg",
  "/nails.jpg",
  "/bride.jpg",
  "/facial2.jpg",
  "/pic.jpg",
  "/pic2.jpg",
  "/facial.png",
  "/pic3.jpg",
  "/pic6.png",
  "/pic5.png",
]

const GallerySection = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-14 px-14">
          <h2 className="text-[56px] text-[var(--color-primary-soft)] font-semibold">
            Gallery
          </h2>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-secondary)] text-[var(--color-text-main)] px-8 py-3 rounded-full flex items-center gap-3 hover:opacity-90 transition"
          >
            <img
              src="/instagram.svg"
              alt=""
              className="w-6 h-6 shrink-0"
            />
            View more on Instagram
          </a>
        </div>

        {/* GRID */}
        <div className="flex flex-wrap gap-6 justify-center">
          {placeholderImages.map((img, index) => (
            <div
              key={index}
              className="w-[241.6px] h-[241.6px] rounded-[24px] overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default GallerySection