import { useContext } from "react";
import OfferCard from "./OfferCard";
import Title from "./Title";
import { DataContext } from "../../DataContext";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function OfferSection() {
  const offerCardRef = useRef();

  useGSAP(() => {
    const offerCards = gsap.utils.toArray(offerCardRef.current.children);
    offerCards.forEach((offerCard) => {
      gsap.from(offerCard, {
        x: (offerCards.indexOf(offerCard) + 1) % 2 === 0 ? 100 : -100,
        opacity: 0,
        scrollTrigger: {
          trigger: offerCard,
          start: "top 100%",
          end: "top 65%",
          scrub: true,
        },
      });
    });
  });

  const { allItems } = useContext(DataContext);
  return (
    <div>
      <Title
        name={"Deals & Offers"}
        subtitle={"Unbeatable Prices for a Limited Time"}
      />
      <div className="w-full h-auto flex justify-center items-center ">
        <div ref={offerCardRef} className="w-[80%] grid grid-cols-2 gap-6 py-7">
          {allItems
            .filter((item) => item.discountPercentage > 19)
            .slice(0, 6)
            .map((item) => (
              <OfferCard item={item} key={item.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
