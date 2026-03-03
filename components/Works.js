const Works = ({ variant = "default", textColor = "light-text" }) => {
  const worksData = {
    default: [
      {
        title: "Adidas",
        image: "images/works/1.webp",
        tag: "E-COMMERCE WEBSITE",
        year: "2024",
      },
      {
        title: "WWF",
        image: "images/works/2.webp",
        tag: "CUSTOM WEBSITE DESIGN",
        year: "2023",
      },
      {
        title: "",
        image: "images/works/callPolice.webp",
        tag: "Music",
        year: "2025",
      },
    ],
    variant2: [
      {
        title: "Elegance",
        image: "03_images/portfolio/1.jpg",
        tag: "Bridal Makeup",
        year: "2024",
      },
      {
        title: "Vibrant",
        image: "03_images/portfolio/2.jpg",
        tag: "Special Event Makeup",
        year: "2024",
      },
      {
        title: "Glamour",
        image: "03_images/portfolio/3.jpg",
        tag: "Hair Extension",
        year: "2024",
      },
    ],
  };

  const isVariant2 = variant === "variant2";
  const works = isVariant2 ? worksData.variant2 : worksData.default;

  const sectionContent = {
    default: {
      title:
        "Explore my sets and music to see how I bring energy to the crowd through seamless mixes and curated vibes.",
      className: "no-top text-light",
    },
    variant2: {
      title: (
        <>
          My portfolio <span className="color-2">showcases</span> a journey of{" "}
          <span className="color-1">creativity</span>, from timeless bridal
          elegance to bold editorial statements
        </>
      ),
      className: "no-top",
    },
  };

  const selectedContent = isVariant2
    ? sectionContent.variant2
    : sectionContent.default;

  return (
    <section className={selectedContent.className}>
      <div className="container">
        <div className="row g-4 gx-5">
          <div className="col-lg-2  ">
            <div
              className={`subtitle ms-3 wow fadeInUp ${textColor}`}
              data-wow-delay=".3s"
            >
              Works
            </div>
          </div>
          <div className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
            <h2 className={textColor}>{selectedContent.title}</h2>
          </div>
        </div>
        <div className="spacer-single" />
      </div>
      <div className="container">
        <div className="row g-4 wow fadeInRight" data-wow-delay=".5s">
          {works.map((work, index) => {
            if (index === 0) {
              return (
                <div key={index} className="col-lg-4">
                  <div
                    className={`hover relative overflow-hidden ${
                      isVariant2 ? "" : "text-light"
                    }`}
                  >
                    <iframe
                      width="100%"
                      height="380"
                      src="https://player-widget.mixcloud.com/widget/iframe/?feed=%2Fnatekodi%2F"
                      // frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              );
            }
            if (index === 1) {
              return (
                <div key={index} className="col-lg-4">
                  <div
                    className={`hover relative overflow-hidden ${
                      isVariant2 ? "" : "text-light"
                    }`}
                  >
                    <iframe
                      width="100%"
                      height="380"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1991445119&color=%23140b04&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#cccccc",
                        lineBreak: "anywhere",
                        wordBreak: "normal",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        fontFamily:
                          "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                        fontWeight: "100",
                      }}
                    >
                      <a
                        href="https://soundcloud.com/dj_lubaba"
                        title="DJ Lubaba"
                        target="_blank"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                      >
                        DJ Lubaba
                      </a>{" "}
                      ·{" "}
                      <a
                        href="https://soundcloud.com/dj_lubaba/dj-lubaba-chill-ama-mix"
                        title="DJ LUBABA - CHILL Amapiano MIX"
                        target="_blank"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                      >
                        DJ LUBABA - CHILL Amapiano MIX
                      </a>
                    </div>
                  </div>
                </div>
              );
            } else
              return (
                <div key={index} className="col-lg-4">
                  <div
                    className={`hover relative overflow-hidden ${
                      isVariant2 ? "" : "text-light"
                    }`}
                    height={380}
                    width={"100%"}
                  >
                    <iframe
                      width="100%"
                      height="380"
                      style={{ border: 0 }}
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2030340772&color=%23140b04&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#cccccc",
                        lineBreak: "anywhere",
                        wordBreak: "normal",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        fontFamily:
                          "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                        fontWeight: "100",
                      }}
                    >
                      <a
                        href="https://soundcloud.com/dj_lubaba"
                        title="DJ Lubaba"
                        target="_blank"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                      >
                        DJ Lubaba
                      </a>{" "}
                      ·{" "}
                      <a
                        href="https://soundcloud.com/dj_lubaba/call-the-police"
                        title="Call the Police (feat. PRINZ)"
                        target="_blank"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                      >
                        Call the Police (feat. PRINZ)
                      </a>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
