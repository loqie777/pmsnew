import React from "react";
import st from './MeliorationGalery.module.scss';
import arr from '../../consts/Meliorationconsts.js'

const MeliorationGalery = () => {
    return(
        <div className={st.container}>
            {arr.map((el, index) => <img src={`/img/${el}`} alt={el} className={st.img} key={index}/>)}
        </div>
    )
}


export default MeliorationGalery;