import React from "react";
import st from './NewsModule.module.scss';
import NewsMainCard from "../../components/NewsMainCard/NewsMainCard";
import news from '../../consts/wholenews.js';
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const NewsModule = () => {
  const navigate = useNavigate(); 

  return (
    <motion.div 
      className={st.center} 
      id="news"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
   
      <div className={st.titleWrapper}>
        <h2 className={st.title}>Новости</h2>
        <div className={st.line}></div>
      </div>


      <div className={st.newsList}>
        {news.slice(0,3).map((ne, index) => (
          <NewsMainCard 
            key={index}
            img={ne.img} 
            title={ne.title} 
            text={ne.text} 
            date={ne.date} 
          />
        ))}
      </div>

      
      <button className={st.btn} onClick={() => navigate('/news')}>
        Все новости <span className={st.arrow}>→</span>
      </button>
    </motion.div>
  );
}

export default NewsModule;
