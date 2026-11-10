import React from "react";
import st from './FooterInfo.module.scss';

const FooterInfo = () => {
  return (
    <div className={st.infoGrid}>
      
      {/* Колонка 1: Контакты */}
      <div className={st.column}>
        <h4 className={st.colTitle}>Контакты</h4>
        <p className={st.text}><strong>Адрес:</strong> 225370, г. Ляховичи, ул. Трудовая, 13</p>
        <p className={st.text}>
          <strong>Тел/Факс:</strong> <a href="tel:+375163321539" className={st.link}>+375 (1633) 2-15-39</a>
        </p>
        <p className={st.text}>
          <strong>E-mail:</strong> <a href="mailto:pr@pmslhv.brest.by" className={st.link}>pr@pmslhv.brest.by</a>
        </p>
      </div>

      {/* Колонка 2: Прием граждан */}
      <div className={st.column}>
        <h4 className={st.colTitle}>Приём граждан</h4>
        <div className={st.receptionBlock}>
          <p className={st.text}><strong>Директор предприятия:</strong></p>
          <p className={st.subText}>Понедельник, 15:00 - 17:00</p>
        </div>
        <div className={st.receptionBlock}>
          <p className={st.text}><strong>Заместитель директора:</strong></p>
          <p className={st.subText}>Пятница, 15:00 - 17:00</p>
        </div>
      </div>

      {/* Колонка 3: Режим работы */}
      <div className={st.column}>
        <h4 className={st.colTitle}>Режим работы</h4>
        <p className={st.text}><strong>Будние дни:</strong> 8:00 - 17:00</p>
        <p className={st.text}><strong>Обед:</strong> 12:00 - 13:00</p>
        <p className={st.text}><span className={st.weekend}>Выходные:</span> суббота, воскресенье</p>
      </div>

    </div>
  );
};

export default FooterInfo;
