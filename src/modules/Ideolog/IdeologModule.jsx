import React from "react";
import st from "./IdeologModule.module.scss";
import arr from '../../consts/ideologconsts.js';
import IdeologCard from "../../components/IdeologCard/IdeologCard";

const IdeologModule = () => {


    return(
        <div className={st.container}>
            <img src="/img/belarus_signs.jpg" alt="belarus" className={st.bimg}/>
            <a href="https://president.gov.by/fp/v1/630/document-thumb__64630__original/64630.1744203438.7b044f240f.pdf" className={st.link}>Директива №12 от 9 апреля 2025 г. "О реализации основ идеологии белорусского государства"</a>
            <h3 className={st.text}>Отчеты о единых днях информирования</h3>
            
            {arr.map((el,index) => <IdeologCard img={el.img} text={el.text} title={el.title} date={el.date} key={index}/>)}
        </div>
    )
}


export default IdeologModule;