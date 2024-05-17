import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const OnlineOrder = () => {
  return (
    <div className='max-w-screen-lg mx-auto py-24'>
      <div className='flex gap-2 justify-center items-center mb-4'>
        <div className='w-5 border-2 border-dashed border-color11'></div>
        <h4 className='font-normal italic text-xl text-color11'>
          From 11:00am to 10:00pm
        </h4>
        <div className='w-5 border-2 border-dashed border-color11'></div>
      </div>
      <div className='flex flex-col items-center gap-5 mb-12'>
        <div className='w-80 md:w-96 border-2 border-color9'></div>
        <h2 className='text-[40px] font-normal text-color3 uppercase'>
          Order Online
        </h2>
        <div className='w-80 md:w-96 border-2 border-color9'></div>
      </div>
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
