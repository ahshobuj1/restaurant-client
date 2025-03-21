import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';

const OnlineOrder = () => {
  return (
    <section className="py-5 px-2 md:px-0 md:pb-20">
      <SectionTitle
        heading={'online order'}
        subHeading={'From 11:00am to 10:00pm'}
      />

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        autoplay={{delay: 2000, disableOnInteraction: false}}
        speed={1000}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <img
            src={slide1}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="absolute uppercase bottom-5 left-20  z-20 text-white text-2xl">
            salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="absolute uppercase bottom-5 left-20  z-20 text-white text-2xl">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />

          <p className="absolute uppercase bottom-5 left-20  z-20 text-white text-2xl">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />

          <p className="absolute uppercase bottom-5 left-20  z-20 text-white text-2xl">
            salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide5}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />

          <p className="absolute uppercase bottom-5 left-20  z-20 text-white text-2xl">
            salads
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OnlineOrder;
