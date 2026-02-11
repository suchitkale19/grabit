import { useRef } from "react";
import Title from "./Title";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function CompanyServices() {
  const serviceRef = useRef();
  useGSAP(() => {
    const servicesDiv = gsap.utils.toArray(serviceRef.current.children);

    servicesDiv.forEach((service) => {
      gsap.from(service, {
        x: servicesDiv.indexOf(service) < 2 ? -100 : 100,
        opacity: 0,
        scrollTrigger: {
          trigger: service,
          start: "top 100% ",
          end: "top 60%",
          scrub: true,
        },
      });
    });
  });
  const services = [
    {
      text: "Trusted by 10,000+ Customers",
      subtext: "Rated 4.6/5 across India",
      bg: "trust",
    },
    {
      text: "Fast & Reliable Delivery",
      subtext: "Delivered within 2-4 business days",
      bg: "fast",
    },
    {
      text: "100% Secure Payments",
      subtext: "UPI • Cards • Net Banking • Wallets",
      bg: "secure2",
    },
    {
      text: "Hassle-Free Returns",
      subtext: "7-day easy replacement",
      bg: "return",
    },
  ];
  return (
    <div className="h-fit w-full flex  flex-col justify-center items-center pb-16">
      <Title name={"We Provide"} subtitle={"Why Choose us?"} />
      <div ref={serviceRef} className="h-fit w-[80%] flex justify-evenly  ">
        {services.map((service) => (
          <div
            style={{ backgroundImage: `url(/src/assets/${service.bg}.jpg)` }}
            className="h-50 w-fit flex flex-col justify-end text-lg border border-zinc-900 p-4 text-center  bg-cover bg-top rounded-2xl"
            key={service.text}
          >
            <h1 className="font-bold">{service.text}</h1>
            <h2 className="text-md  text-zinc-300">{service.subtext}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyServices;
