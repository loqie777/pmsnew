import React from "react";
import st from './LandscapingCard.module.scss';

const LandscapingCard = ({ img, title, text, date }) => {
  return (
    <div className={st.newsRow}>
      <div className={st.imgWrapper}>
        <img src={`/img/${img}`} className={st.img} alt={title} />
      </div>
      <div className={st.content}>
        <span className={st.date}>{date}</span>
        <h3 className={st.title}>{title}</h3>
        <p className={st.text}>{text}</p>
      </div>
    </div>
  );
};

export default LandscapingCard;
