import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import ContentCard from "../components/ContentCard";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/Footer";
import Head from "next/head";
// Local Data
import data from "../data/portfolio.json";
import services from "./services.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        <Carousel
          autoPlay={true}
          autoFocus={true}
          interval={3500}
          infiniteLoop={true}
          transitionTime={1000}
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          stopOnHover={false}
          showStatus={false}
          height={"40em"}
        >
          <Image
            alt="Application Engineering"
            style={{ objectFit: "contain", maxHeight: "90%" }}
            src="/images/App1Shaiz.png"
            width="1124px"
            height="646px"
          />
          <Image
            style={{ objectFit: "contain", maxHeight: "90%" }}
            src="/images/WebShaiz2.png"
            alt="Web Development"
            width="1124px"
            height="646px"
          />
          <Image
            style={{ objectFit: "contain", maxHeight: "90%" }}
            src="/images/Desktop1Shaiz.png"
            alt="Desktop Applications"
            width="1124px"
            height="646px"
          />
        </Carousel>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="tablet:m-10 text-4xl  font-medium uppercase">
            Services
          </h1>

          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {services.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0 " ref={aboutRef}>
          <h1 className="tablet:m-10 text-4xl  font-medium uppercase">About</h1>

          <p className="tablet:m-10 mt-2 text-justify text-xl laptop:text-2xl w-full laptop:w-4/5">
            {data.aboutpara}
          </p>
        </div>

        <div className=" py-6 laptop:py-12">
          <div className="container px-4 mx-auto">
            <div className="laptop:flex laptop:flex-wrap laptop:-mx-4 mt-6 laptop:mt-12">
              {data.content.map(({ description, title }, ind) => (
                <ContentCard
                  title={title}
                  key={ind}
                  content={description}
                ></ContentCard>
              ))}
            </div>
          </div>
        </div>

        <div className=" mx-auto mt-10 laptop:mt-40 p-2 laptop:p-0">
          <h1 className=" text-4xl  font-medium uppercase">
            Happy Customers
          </h1>

          <figure className="laptop:flex bg-slate-80 rounded-xl p-8 laptop:p-0  dark:bg-slate-800 ">
              {" "}
              <Image
                alt="beton"
                className="laptop:rounded-none rounded-full mx-auto"
                src="/images/beton_prev_ui.png"
                width="650px"
                height="320px"
              />

            <div className="pt-12 laptop:w-96  laptop:h-96 laptop:mt-40 laptop:p-8 text-center laptop:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium">
                  “They’re extremely responsive and professional.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  Rehan Khalid
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Co-Founder, Beton Marketing.
                </div>
              </figcaption>
            </div>
          </figure>
        </div>

        <Footer />
      </div>
    </>
  );
}
