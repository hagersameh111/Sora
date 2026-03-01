import Section from "../../ui/Section"
import Container from "../../ui/Container"
import { visitData } from "../../../data/visitData"

const VisitSection = () => {
  return (
    <Section className="bg-[#F6F6F6]">
      <Container>

        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-[48px] font-semibold text-[var(--color-primary-soft)] mb-6">
            {visitData.title}
          </h2>

          <div className="w-[420px] h-[1px] bg-[var(--color-primary-soft)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* LEFT SIDE */}
          <div>

            {/* LOCATION HEADER */}
            <div className="flex items-start gap-4 mb-8">
              <img
                src={visitData.location.icon}
                alt="Location icon"
                className="w-7 h-7 mt-1"
              />

              <div>
                <h4 className="text-[26px] font-bold text-[var(--color-primary)] mb-3">
                  {visitData.location.label}
                </h4>

                <p className="text-[18px] text-[#4A4A4A] leading-relaxed">
                  {visitData.location.address.map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="w-full h-[420px] rounded-[28px] overflow-hidden">
              <img
                src={visitData.location.mapImage}
                alt="Map location"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-start gap-12 pt-10">

            {visitData.contacts.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}

            {/* BUTTON */}
            <button className="
              mt-6
              bg-[var(--color-primary)]
              text-white
              py-5
              px-20
              rounded-[24px]
              font-semibold
              text-lg
              hover:opacity-90
              transition
              w-fit
            ">
              {visitData.buttonText}
            </button>

          </div>

        </div>

      </Container>
    </Section>
  )
}

const ContactItem = ({ icon, title, value }) => {
  return (
    <div className="flex items-start gap-5">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-7 h-7 mt-1"
      />

      <div>
        <h4 className="text-[28px] font-bold text-[var(--color-primary)]">
          {title}
        </h4>

        {value && (
          <p className="text-[18px] text-[#6B6B6B] mt-2">
            {value}
          </p>
        )}
      </div>
    </div>
  )
}

export default VisitSection