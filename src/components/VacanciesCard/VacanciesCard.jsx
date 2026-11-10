import React from "react";
import st from './VacanciesCard.module.scss';

const VacanciesCard = ({ name, img }) => {
  return (
    <div className={st.container}>
      <h3 className={st.title}>{name}</h3>
      
      <div className={st.imgWrapper}>
        <img src={`/img/${img}`} className={st.img} alt={name} />
      </div>
      
      <a href="#feedback" className={st.btn}>
        Подробнее <span className={st.arrow}>→</span>
      </a>
    </div>
  );
}

export default VacanciesCard;
