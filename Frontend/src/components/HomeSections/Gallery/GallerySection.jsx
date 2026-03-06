import Container from "../../ui/Container"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10 sm:mb-12 lg:mb-14 px-0 lg:px-14">

          <h2 className="text-3xl sm:text-4xl lg:text-[56px] text-[var(--color-primary-soft)] font-semibold text-center lg:text-left">
            {t("gallery.title")}
          </h2>

          <a
            href={t("gallery.instagramUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-secondary)] text-[var(--color-text-main)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center gap-3 hover:opacity-90 transition text-sm sm:text-base"
          >
            <img
              src="/instagram.svg"
              alt=""
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
            />
            {t("gallery.viewMore")}
          </a>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">

          {placeholderImages.map((img, index) => (
            <div
              key={index}
              className="aspect-square rounded-[18px] sm:rounded-[24px] overflow-hidden group cursor-pointer"
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