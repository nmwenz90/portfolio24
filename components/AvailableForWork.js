import Link from "next/link";
import CounterSection from "./CounterSection";

const AvailableForWork = ({ variant = "default" }) => {
  const isVariant2 = variant === "variant2";

  const content = {
    default: {
      subtitle: "Let's Work!",
      title: "Utah Based DJ/Producer",
      description:
        "I started my DJ journey in Pittsburgh in 2013, spinning hip hop and EDM at venues like the Rex Theater and university events. In 2017, I moved to Los Angeles, performing at weddings and clubs like Catch One and The Parlor. Since 2021, I've been based in Salt Lake City, continuing to bring great vibes as an open-format DJ specializing in Top 40, EDM, and hip hop. For me, DJing is all about energizing the crowd and motivating people to dance.",
      aboutLink: "/about",
      imageSrc: "03_images/nate_bw.jpg",
      counterColor: "color",
    },
    variant2: {
      subtitle: "Available for Work",
      title: (
        <>
          <span className="color-1">Hair</span> and{" "}
          <span className="color-1">Makeup</span> Artist from New York
        </>
      ),
      description:
        "Hi, I'm Selena, a passionate makeup artist based in the heart of New York City. With over 12 years of experience in the beauty industry, I've had the privilege of working with a diverse clientele.",
      aboutLink: "/03_about",
      imageSrc: "03_images/nate_bw.jpg",
      counterColor: "color-1",
    },
  };

  const selectedContent = isVariant2 ? content.variant2 : content.default;

  return (
    <div className="container">
      <div className="spacer-double d-lg-none d-sm-block" />
      <div className="row align-items-center g-4 gx-5">
        <div className="col-lg-6">
          <div className="relative">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              {selectedContent.subtitle}
            </div>
            <h1 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
              {selectedContent.title}
            </h1>
          </div>
          <p className="lead wow fadeInUp" data-wow-delay=".5s">
            {selectedContent.description}
          </p>
          <div className="spacer-10" />
          {/* <Link
            className="w-150px btn-line wow fadeIn"
            data-wow-delay=".6s"
            href={selectedContent.aboutLink}
          >
            About Me
          </Link> */}
        </div>
        <div className="col-lg-6">
          <img
            src={selectedContent.imageSrc}
            className="w-100 wow fadeInUp"
            data-wow-delay=".6s"
            alt="image"
          />
        </div>
      </div>
      <div className="spacer-double" />
      {/* <CounterSection color={selectedContent.counterColor} /> */}
    </div>
  );
};

export default AvailableForWork;
