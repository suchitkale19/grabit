import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "./Card";

function ProductSection({ allItems }) {
  return (
    <div>
      <Title name={"Trending Now"} subtitle={"Popular Picks This Week"} />
      <div className="h-auto w-full pb-7 pt-3 px-40">
        <Swiper
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
                  <SwiperSlide key={item.id}>
                    <Card item={item} />
                  </SwiperSlide>
                ))
            : allItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card item={item} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSection;
