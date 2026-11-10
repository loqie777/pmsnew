import React from "react";
import st from './Slider.module.scss';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const slidesData = [
  {
    img: "photo_2026-01-29_21-32-00 (1).jpg",
    alt: "slide1",
    badge: "УП «Ляховичское ПМС»",
    title: "Мелиорация земель",
    desc: "Ремонт, технический уход и реконструкция систем и сооружений",
    btnText: "Наши услуги",
    btnLink: "#services"
  },
  {
    img: "1207.jpg",
    alt: "slide2",
    badge: "Производство",
    title: "Гидротехнические сооружения",
    desc: "Строительство, реконструкция и плановый уход за сложными водохозяйственными объектами.",
    btnText: "О предприятии",
    btnLink: "#aboutus"
  },
  {
    img: "1111.png",
    alt: "slide3",
    badge: "Спецтехника",
    title: "Собственный автопарк",
    desc: "Предоставляем услуги специальной техники для любых задач.",
    btnText: "Аренда техники",
    btnLink: "#services"
  },
  {
    img: "1208.jpg",
    alt: "slide4",
    badge: "Коллектив",
    title: "Наша главная ценность",
    desc: "Опытная команда высококвалифицированных инженеров и рабочих, сохраняющая и приумножающая традиции мелиораторов.",
    btnText: "Вакансии",
    btnLink: "#vacancies"
  },
  {
    img: "1204.jpg",
    alt: "slide5",
    badge: "История",
    title: "Более 55 лет на службе земли",
    desc: "История создания, развития и ключевых производственных достижений нашего предприятия с 1967 года.",
    btnText: "Узнать историю",
    btnLink: "#history"
  },
  {
    img: "1112.png",
    alt: "slide6",
    badge: "Жизнь предприятия",
    title: "Идеологическая работа и спорт",
    desc: "Активно участвуем мероприятиях, развивая корпоративную культуру коллектива.",
    btnText: "Пресс-центр",
    btnLink: "#news"
  },
  {
    img: "1206.jpg",
    alt: "slide7",
    badge: "Контакты",
    title: "Всегда на связи",
    desc: "Свяжитесь с приемной предприятия или ознакомьтесь с графиком личного приема граждан.",
    btnText: "Обратная связь",
    btnLink: "#feedback"
  }
];

const Slider = () => {
  return (
    <div className={st.container}>
      <div className={st.slider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 9000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className={st.slideItem}>

              <img src={`/img/${slide.img}`} alt={slide.alt} className={st.slideImg} />
              
              <div className={st.overlay}></div>
              

              <div className={st.content}>
                <span className={st.badge}>{slide.badge}</span>
                <h2 className={st.title}>{slide.title}</h2>
                <p className={st.desc}>{slide.desc}</p>
                <a href={slide.btnLink} className={st.btn}>
                  {slide.btnText} <span className={st.arrow}>→</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
