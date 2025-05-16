import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function CarouselImages() {
  return (
    <div className="px-4 py-14">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img
            src="discussing-business-chart.webp"
            alt="Discusão sobre negócios"
            className="rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="full-shot-woman-working-as-economist.webp"
            alt="Mulher trabalhando como economista"
            className="rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="young-couple-moving-new-home.webp"
            alt="Jovem casal se mudando para nova casa"
            className="rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
