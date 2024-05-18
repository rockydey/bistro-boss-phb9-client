import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../SectionTitle/SectionTitle";

const OnlineOrder = () => {
  return (
    <div className='max-w-screen-lg mx-auto my-24'>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11:00am to 10:00pm"}
      />
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className='mySwiper'>
          <SwiperSlide>
            <img src={slide1} alt='' />
            <p className='font-cinzel text-base md:text-2xl uppercase text-color4 -mt-8 md:-mt-16 mb-10 text-center'>
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt='' />
            <p className='font-cinzel text-base md:text-2xl uppercase text-color4 -mt-8 md:-mt-16 mb-10 text-center'>
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt='' />
            <p className='font-cinzel text-base md:text-2xl uppercase text-color4 -mt-8 md:-mt-16 mb-10 text-center'>
              pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt='' />
            <p className='font-cinzel text-base md:text-2xl uppercase text-color4 -mt-8 md:-mt-16 mb-10 text-center'>
              desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt='' />
            <p className='font-cinzel text-base md:text-2xl uppercase text-color4 -mt-8 md:-mt-16 mb-10 text-center'>
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OnlineOrder;
