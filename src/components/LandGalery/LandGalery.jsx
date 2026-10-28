import React from "react";
import st from './LandGalery.module.scss';
import arr from '../../consts/LandGaleryconsts.js';

const LandGalery = () => {
    return(
        <div className={st.container}>
            <span className={st.title}>Благоустройство территории</span>
            <div className={st.block}>
            {arr.map((el,index) =>  <img src= {`/img/${el}`} key={index} alt={el} className={st.img}/>)}
            </div>
        </div>
    )
}

export default LandGalery;