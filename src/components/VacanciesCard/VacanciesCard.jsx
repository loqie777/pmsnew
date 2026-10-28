import React from "react";
import st from './VacanciesCard.module.scss';



const VacanciesCard = ({name,img}) => {
    return(
        <div className={st.container}>
            <span className={st.title}><strong>{name}</strong></span>
            <img src={`/img/${img}`} className={st.img}/>
            <a href="#feedback"><button className={st.btn}>Подробнее</button></a>
        </div>
    )
}


export default VacanciesCard;