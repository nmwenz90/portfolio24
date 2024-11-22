import Marquee from "react-fast-marquee";

const MarqueeNathan = ({
  textColor = "light",
  variant = "default",
  marqueeData = [
    { id: 1, text: "MUSIC PRODUCTION", stroke: false },
    { id: 2, text: "WEDDING DJ", stroke: true },
    { id: 3, text: "EVENT DJ", stroke: false },
    { id: 4, text: "MIXING", stroke: true },
    { id: 5, text: "MASTERING", stroke: false },
    { id: 6, text: "CLUB DJ", stroke: true },
  ],
}) => {
  const isVariant2 = variant === "variant2";
  const items = isVariant2 ? marqueeData.variant2 : marqueeData.default;

  return (
    <section className={`text-${isVariant2 ? "dark" : textColor} no-top`}>
      <div className="wow fadeInRight d-flex">
        <div className="de-marquee-list wow">
          <Marquee
            className=""
            speed={200}
            loop={0}
            play={true}
            autoFill={true}
          >
            {marqueeData.map((item) => (
              <span
                key={item.id}
                className={`d-item-txt ${item.stroke ? "stroke-text" : ""}`}
              >
                {item.text}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MarqueeNathan;

export const MarqueeNathan2 = () => {
  return (
    <section className="bg-color text-dark no-top no-bottom">
      <div className="wow fadeInRight d-flex">
        <div className="de-marquee-list wow">
          <Marquee
            className=""
            speed={200}
            loop={0}
            play={true}
            autoFill={true}
          >
            {[
              "Strength",
              "Confidence",
              "Transformation",
              "Empower",
              "Motivate",
              "Achieve",
              "Fit",
              "Focused",
              "Unstoppable",
            ].map((text, index) => (
              <span key={index} className="d-item-txt">
                {text}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export const MarqueeNathan3 = () => {
  return (
    <div className="wow fadeInRight d-flex mt-20">
      <div className="de-marquee-list wow bg-color pt-2 pb-10 lh-1 text-dark text-uppercase fs-60 fw-600 xs-hide">
        <Marquee
          speed={200}
          loop={0}
          play={true}
          autoFill={true}
          className="d-item"
        >
          {[
            "Masterpiece",
            "Savor",
            "Artisan",
            "Crafted",
            "Delicious",
            "Gourmet",
            "Essence",
            "Exquisite",
            "Fusion",
            "Temptation",
          ].map((word, index) => (
            <span key={index} className="mx-3">
              {word}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
