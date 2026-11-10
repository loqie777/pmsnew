import React from "react";
import st from './NewsPageBlock.module.scss';
import { motion } from "framer-motion";

const NewsPageBlock = ({ img, title, text, date }) => {
  return (
    <motion.div 
      className={st.newsRow}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Контейнер изображения слева */}
      <div className={st.imgWrapper}>
        <img src={`/img/${img}`} className={st.img} alt={title} />
      </div>
      
      {/* Контейнер контента справа */}
      <div className={st.content}>
        <span className={st.date}>{date}</span>
        <h3 className={st.title}>{title}</h3>
        <p className={st.text}>{text}</p>

      </div>
    </motion.div>
  );
};

export default NewsPageBlock;
