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
