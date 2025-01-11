// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../carousel/carousel.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="flex flex-1 w-1">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        <SwiperSlide>
          <Image
            src="/images/carousel/carousel1.png"
            alt="carousel"
            width={800}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/carousel/carousel1.png"
            alt="carousel"
            width={800}
            height={700}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/carousel/carousel1.png"
            alt="carousel"
            width={800}
            height={700}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
