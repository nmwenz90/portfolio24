const About = ({ variant = "default", aboutTitle = "About Me" }) => {
  const isVariant2 = variant === "variant2";

  const content = {
    default: {
      title:
        "Transforming your vibe into an unforgettable experience with seamless transitions, high-energy beats, and a dancefloor that never stops moving.",
      paragraph1:
        "I'm a DJ with a passion for creating unforgettable experiences. With over 8 years of spinning tracks, I enjoy crafting sets that are not just high-energy and dynamic but also flow seamlessly to keep the crowd moving all night long.",
      paragraph2:
        "I specialize in curating custom DJ sets using the latest tracks and trends, blending genres like Top 40, EDM, and hip hop. Whether it's a club night, wedding, or special event, I bring the energy to keep the vibe fresh and the dancefloor packed.",
    },
    variant2: {
      title: (
        <>
          <span className="color-2">Transforming faces</span>, one brushstroke
          at a time—where artistry meets{" "}
          <span className="color-1">passion</span>, and every look is a
          masterpiece crafted to reveal the beauty within.
        </>
      ),
      paragraph1:
        "I believe that makeup is more than just a tool—it's a form of self-expression, confidence, and empowerment. Whether you're looking for a subtle, natural look or something bold and dramatic, my mission is to bring your beauty aspirations to life.",
      paragraph2:
        "Over the years, I've had the honor of working with a diverse range of clients, from brides on their big day to models on set, and everyday individuals who just want to feel their best. My work is influenced by the dynamic energy of New York",
    },
  };

  const selectedContent = isVariant2 ? content.variant2 : content.default;

  return (
    <section className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              {aboutTitle}
            </div>
          </div>
          <div className="col-lg-10">
            <h2 className="lh-1  wow fadeInUp" data-wow-delay=".4s">
              {selectedContent.title}
            </h2>
            <div className="row g-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="col-sm-6">
                <p>{selectedContent.paragraph1}</p>
              </div>
              <div className="col-sm-6">
                <p>{selectedContent.paragraph2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
