import Section from "../../ui/Section"
import Container from "../../ui/Container"
import { visitData } from "../../../data/visitData"
import { useTranslation } from "react-i18next"

const VisitSection = () => {
  const { t } = useTranslation()

  return (
    <Section className="bg-[#F6F6F6] pl-3">
      <Container>

        <div className="mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[var(--color-primary-soft)] mb-4 sm:mb-6">
            {t("visit.title")}
          </h2>

          <div className="w-full max-w-[420px] h-[1px] bg-[var(--color-primary-soft)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">

          {/* LEFT SIDE */}
          <div>

            <div className="flex items-start gap-4 mb-6 sm:mb-8">
              <img src="/location.svg" className="w-6 h-6 sm:w-7 sm:h-7 mt-1" />

              <div>
                <h4 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[var(--color-primary)] mb-2 sm:mb-3">
                  {t("visit.locationLabel")}
                </h4>

                <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed">
                  {t("visit.address", { returnObjects: true }).map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </p>
              </div>
            </div>

            <div className="w-full h-[260px] sm:h-[340px] lg:h-[420px] rounded-[20px] sm:rounded-[28px] overflow-hidden">
              <img
                src={visitData.mapImage}
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 pt-0 lg:pt-10">

            {visitData.contacts.map((item) => (
              <div key={item.id} className="flex items-start gap-4 sm:gap-5">

                <img src={item.icon} className="w-6 h-6 sm:w-7 sm:h-7 mt-1" />

                <div>
                  <h4 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[var(--color-primary)]">
                    {t(`visit.contacts.${item.id}.title`)}
                  </h4>

                  <p className="text-sm sm:text-base lg:text-[18px] mt-1 sm:mt-2">
                    {t(`visit.contacts.${item.id}.value`)}
                  </p>
                </div>

              </div>
            ))}

            <button className="bg-[var(--color-primary)] text-white py-3 sm:py-4 lg:py-5 px-8 sm:px-12 lg:px-20 rounded-[18px] sm:rounded-[24px] font-semibold text-sm sm:text-base lg:text-lg w-fit">
              {t("visit.button")}
            </button>

          </div>

        </div>

      </Container>
    </Section>
  )
}

export default VisitSection