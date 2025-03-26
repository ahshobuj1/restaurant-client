import ProductCard from '../../shared/productCard/ProductCard';
import SectionTitle from '../../shared/sectionTitle/SectionTitle';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
import useMenu from '../../../hooks/useMenu';

const RecommendsItem = () => {
  const [menu] = useMenu();
  const saladItems = menu.filter((item) => item.category === 'salad');

  return (
    <section className="px-2 md:px-0 md:mb-20">
      <SectionTitle subHeading={'Should try'} heading={'chef recommends'} />

      <Swiper
        slidesPerView={3}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        speed={1000}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
        {saladItems.map((item) => (
          <SwiperSlide>
            <ProductCard key={item.id} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCube, Pagination, Autoplay]}
          className="mySwiper">
          {items.map((item) => (
            <SwiperSlide>
              <ProductCard key={item.id} item={item} />{' '}
            </SwiperSlide>
          ))}
        </Swiper> */}

      {/* <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper">
          {items.map((item) => (
            <SwiperSlide>
              <ProductCard key={item.id} item={item} />{' '}
            </SwiperSlide>
          ))}
        </Swiper> */}
    </section>
  );
};

export default RecommendsItem;
