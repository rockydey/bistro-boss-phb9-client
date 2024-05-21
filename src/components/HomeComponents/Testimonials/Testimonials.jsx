import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((res) => setReviews(res.data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className='max-w-screen-xl mx-auto my-24'>
      <SectionTitle heading='TESTIMONIALS' subHeading='What Our Clients Say' />
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className='mySwiper'>
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className='flex w-4/5 mx-auto flex-col items-center'>
              <Rating
                style={{ maxWidth: 120, color: "#BB8506" }}
                value={review.rating}
              />
              <div></div>
              <p className='text-color5 text-center mt-5 text-xl'>
                {review.details}
              </p>
              <h3 className='uppercase text-3xl text-color11 mt-3 font-medium'>
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
