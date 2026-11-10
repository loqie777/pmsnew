import React from "react";
import st from './FeedBack.module.scss';
import { motion } from "framer-motion";

const FeedBack = () => {
  return (
    <motion.div 
      className={st.center} 
      id="feedback"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={st.titleWrapper}>
        <h2 className={st.title}>Обратная связь и контакты</h2>
        <div className={st.line}></div>
      </div>

      <div className={st.mainGrid}>
        <div className={st.infoSide}>
          <div className={st.contactItem}>
            <div className={st.iconCircle}>✉️</div>
            <div className={st.textBlock}>
              <span className={st.label}>Электронная почта</span>
              <a href="mailto:pr@pmslhv.brest.by" className={st.valueLink}>pr@pmslhv.brest.by</a>
            </div>
          </div>

          <div className={st.contactItem}>
            <div className={st.iconCircle}>📞</div>
            <div className={st.textBlock}>
              <span className={st.label}>Приемная / Факс</span>
              <a href="tel:+375163321539" className={st.valueLink}>+375 (1633) 2-15-39</a>
            </div>
          </div>

          <div className={st.contactItem}>
            <div className={st.iconCircle}>📍</div>
            <div className={st.textBlock}>
              <span className={st.label}>Адрес предприятия</span>
              <span className={st.value}>225370, г. Ляховичи, ул. Трудовая, 13</span>
            </div>
          </div>
        </div>


        <div className={st.mapSide}>
          <iframe 
            src="https://google.com" 
            className={st.frame}
            allowFullScreen="" 
            loading="lazy" 
            title="Схема проезда"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default FeedBack;
