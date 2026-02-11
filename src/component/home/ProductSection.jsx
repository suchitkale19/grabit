import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "./Card";
// import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function ProductSection({ allItems }) {
  // const cardRef = useRef();
  useGSAP(() => {
    const productCards = gsap.utils.toArray(".productCard");
    console.log(productCards);

    gsap.from(productCards, {
      y: 200,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#cardContainer",
        start: "top 80%",
        end: "top 60%",
      },
    });
  });

  return (
    <div>
      <Title name={"Trending Now"} subtitle={"Popular Picks This Week"} />
      <div className="h-auto w-full pb-7 pt-3 px-40">
        <Swiper
          id="cardContainer"
          style={{
            padding: "40px 0px",

            "--swiper-navigation-color": "#fff", // change to your color
            "--swiper-navigation-size": "28px", // optional: change size
            // "--swiper-pagination-color": "white", // active dot color
            // "--swiper-pagination-bullet-inactive-color": "#ffffff", // inactive dot color
            // "--swiper-pagination-bullet-inactive-opacity": "0.4", // optional
          }}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          navigation={true}
          modules={[Navigation]}
          loopAdditionalSlides={5}
          observer={true}
          observeParents={true}
        >
          {allItems.length > 30
            ? allItems
                .filter((item) => item.rating >= 4.2)
                .slice(0, 16)
                .map((item) => (
                  <SwiperSlide className="productCard" key={item.id}>
                    <Card item={item} />
                  </SwiperSlide>
                ))
            : allItems.map((item) => (
                <SwiperSlide className="productCard" key={item.id}>
                  <Card item={item} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSection;
