import React from "react";
import st from "./IdeologModule.module.scss";
import arr from '../../consts/ideologconsts.js';
import IdeologCard from "../../components/IdeologCard/IdeologCard";

const IdeologModule = () => {
  return (
    <div className={st.container}>
      
      <div className={st.bannerWrapper}>
        <img src="/img/belarus_signs.jpg" alt="Символика Республики Беларусь" className={st.bimg} />
      </div>

      <div className={st.documentBox}>
        <span className={st.docBadge}>Официальный документ</span>
        <a 
          href="https://president.gov.by/fp/v1/630/document-thumb__64630__original/64630.1744203438.7b044f240f.pdf" 
          className={st.link}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Директива №12 от 9 апреля 2025 г. "О реализации основ идеологии белорусского государства" <span className={st.docArrow}>→</span>
        </a>
      </div>

      <div className={st.titleWrapper}>
        <h3 className={st.text}>Отчеты о единых днях информирования</h3>
        <div className={st.line}></div>
      </div>


      <div className={st.reportsList}>
        {arr.map((el, index) => (
          <IdeologCard 
            key={index}
            img={el.img} 
            text={el.text} 
            title={el.title} 
            date={el.date} 
          />
        ))}
      </div>

    </div>
  );
}

export default IdeologModule;
