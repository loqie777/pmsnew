import React from "react";
import st from './ServiceCard.module.scss';
import { useNavigate } from "react-router";

const ServiceCard = ({img,name}) => {
    const nav = useNavigate();

    return(
        <div className={st.container}>
            <span className={st.title}>{name}</span>
            <img src={`/img/${img}`} className={st.img}/>
            <a href="#feedback"><button className={st.btn}>Подробнее</button></a>
        </div>
    )
}


export default ServiceCard;