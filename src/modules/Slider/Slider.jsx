import React from "react";
import st from './Slider.module.scss';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Slider = () => {

    return(
        <div className={st.container}>
            <div className={st.slider}>
                 <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay = {{delay: 5000}}
    >
    <SwiperSlide><img src="/img/photo_2026-01-29_21-32-00 (1).jpg" alt="slide1" className={st.slide}/></SwiperSlide>
      <SwiperSlide><img src="/img/1207.jpg" alt="slide2" className={st.slide}/></SwiperSlide>
      <SwiperSlide><img src="/img/1111.png" alt="slide3" className={st.slide}/></SwiperSlide>
      <SwiperSlide><img src="/img/1208.jpg" alt="slide4" className={st.slide}/></SwiperSlide>
      <SwiperSlide><img src="/img/1204.jpg" alt="slide5" className={st.slide}/></SwiperSlide>
      <SwiperSlide><img src="/img/1112.png" alt="slide6" className={st.slide}/></SwiperSlide>
      <SwiperSlide><img src="/img/1206.jpg" alt="slide7" className={st.slide}/></SwiperSlide>
    </Swiper>
            </div>
        </div>
    )
}


export default Slider;