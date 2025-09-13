// HeroSection.jsx
import { IoIosCheckmarkCircle } from "react-icons/io";

const APIHeroSection = ({
  image,
  alt = "Hero",
  subheading,
  heading,
  description,
  buttons = [], 
  features = [],
  infoBoxes = [], 
  reverse = false,
}) => {
  return (
    <section className="space-y-14 px-4">
      <div className="relative w-full h-full overflow-hidden flex items-start justify-center mb-16">
        <div
          className={`relative grid gap-4 md:grid-cols-2 items-center ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          {image && (
            <div className="relative flex justify-center animate-zoomIn mt-[10px] md:mt-[2px] order-1 md:order-2">
              <img
                src={image}
                alt={alt}
                className="max-w-full rounded-lg object-contain"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col gap-4 md:gap-2 items-start justify-center animate-fadeIn px-4 md:mt-16 mt-10 sm:px-2 w-full order-2 md:order-1">
            {subheading && (
              <p className="text-3xl text-blue-600 mb-10">{subheading}</p>
            )}

            {heading && (
              <p className="text-[32px] sm:text-[40px] md:text-7xl font-semibold text-black leading-tight md:mb-4">
                {heading}
              </p>
            )}

            {description && (
              <h1 className="text-[16px] sm:text-[20px] md:text-[22px] text-gray-600 leading-[24px] sm:leading-[28px] md:leading-[24px] mb-6">
                {description}
              </h1>
            )}

            {/* Buttons */}
            {buttons.length > 0 && (
              <div className="flex gap-4 mt-2 flex-wrap">
                {buttons.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.link}
                    className={`px-6 sm:px-14 py-[8px] sm:py-[10px] rounded-[8px] font-medium transition-all duration-300 ${
                      btn.type === "primary"
                        ? "text-white border border-[#5956D6] bg-[#5956D6] hover:bg-[#2A7CF5]"
                        : "text-[#5956D6] border border-[#5956D6] hover:bg-[#5956D6] hover:text-white"
                    }`}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            )}

            {/* Features */}
            {features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[16px] text-gray-600 font-medium mt-4">
                {features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <IoIosCheckmarkCircle className="text-blue-600 w-7 h-7" />
                    {item}
                  </div>
                ))}
              </div>
            )}

            {/* Info Boxes */}
            {infoBoxes.length > 0 && (
              <div className="flex justify-start gap-[5px] mt-10 flex-wrap">
                {infoBoxes.map((box, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-[4px] px-2 rounded-[8px] border border-[#D5D1D1] bg-white shadow-[0_0_3px_rgba(0,0,0,0.25)] w-[84px] h-[80px] md:w-[116px] md:h-[99px] justify-between text-center"
                  >
                    {box.icon ? (
                      <img
                        src={box.icon}
                        alt={box.title}
                        className="w-30 h-25 sm:w-30 sm:h-25 rounded-md object-contain"
                      />
                    ) : (
                      <p className="text-[#1368C7] font-roboto text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[22.5px] mt-6">
                        {box.title}
                      </p>
                    )}
                    {box.subtitle && (
                      <p className="text-[9.3px] sm:text-[10px] md:text-[12px] text-black leading-tight whitespace-nowrap py-3">
                        {box.subtitle}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIHeroSection;
