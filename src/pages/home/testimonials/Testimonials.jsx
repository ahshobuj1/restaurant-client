import {useEffect, useState} from 'react';
import RatingCard from '../../../components/Rating';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation} from 'swiper/modules';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className=" md:mb-20 px-2 md:px-0">
      <SectionTitle
        subHeading={'what our client says'}
        heading={'testimonials'}
      />

      <Swiper
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        speed={1000}>
        {reviews.map((review) => (
          <SwiperSlide>
            <RatingCard key={review.id} review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
