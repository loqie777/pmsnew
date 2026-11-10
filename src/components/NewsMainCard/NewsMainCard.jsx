import React from "react";
import st from './NewsMainCard.module.scss';
import { useNavigate } from "react-router";

const NewsMainCard = ({ img, title, text, date }) => {
  const nav = useNavigate()
  return (
    <div className={st.card} onClick={() => nav('/news')}>
    
      <div className={st.imgWrapper}>
        <img src={`/img/${img}`} className={st.img} alt={title} />
      </div>
      
      <div className={st.cardContent}>
        <span className={st.date}>{date}</span>
        <h3 className={st.title}>{title}</h3>
        <p className={st.text}>{text}</p>
      </div>

    </div>
  );
}

export default NewsMainCard;
