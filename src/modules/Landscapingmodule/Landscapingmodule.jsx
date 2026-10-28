import React from "react";
import st from './Landscapingmodule.module.scss';
import arr from '../../consts/landscapingconsts.js';
import LandscapingCard from "../../components/landscapingCard/LandscapingCard";
import LandGalery from "../../components/LandGalery/LandGalery.jsx";

const Landscapingmodule = () => {
    return(
        <div className={st.container}>
            {arr.map((el, index) => <LandscapingCard img={el.img} text={el.text} title={el.title} date={el.date} key={index}/>)}
            <hr />
            <LandGalery/>
        </div>
    )
}


export default Landscapingmodule;