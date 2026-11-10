import React from "react";
import st from './ServiceCard.module.scss';

const ServiceCard = ({ img, name, desc }) => {
  return (
    <div className={st.container}>
      <div className={st.iconWrapper}>
        <img src={`/img/${img}`} className={st.img} alt={name} />
      </div>

      <h3 className={st.title}>{name}</h3>
      <p className={st.description}>{desc}</p>
      
      <a href="#feedback" className={st.btn}>
        Подробнее <span className={st.arrow}>→</span>
      </a>
    </div>
  );
};

export default ServiceCard;
