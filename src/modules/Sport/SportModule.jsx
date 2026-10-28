import React from "react";
import st from './SportModule.module.scss';
import arr from '../../consts/Sportconsts.js';
import LandscapingCard from "../../components/landscapingCard/LandscapingCard.jsx";

const SportModule = () => {
    return(
        <div className={st.container}>
            {arr.map((el, index) => <LandscapingCard img={el.img} text={el.text} title={el.title} date={el.date} key={index}/>)}
        </div>
    )
}

export default SportModule;