import Container from "../../ui/Container"
import { useTranslation } from "react-i18next"

const PoliciesBar = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-[var(--color-secondary)] py-4 sm:py-6">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 text-white text-center lg:text-left">

          {/* TEXT GROUP */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center lg:justify-start">

            <span className="text-[12px] lg:text-base">
              {t("policies.line1")}
            </span>

            <img
              src="/white-heart.svg"
              alt=""
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
            />

            <span className="text-[12px] lg:text-base">
              {t("policies.line2")}
            </span>

            <img
              src="/white-heart.svg"
              alt=""
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
            />

            <span className="text-[12px] lg:text-base">
              {t("policies.line3")}
            </span>

            {/* HEART ICON */}
            <img
              src="/white-heart.svg"
              alt=""
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 hidden lg:block"
            />

          </div>

          {/* BUTTON */}
          <button className="bg-[var(--color-tertiary)]/60 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-[19px] font-medium hover:opacity-90 transition text-[12px] lg:text-base">
            {t("policies.button")}
          </button>

        </div>
      </Container>
    </div>
  )
}

export default PoliciesBar