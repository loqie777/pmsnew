import React from "react";
import st from './YearSymbol.module.scss';


const YearSymbol  = () => {
    return(
        <div className={st.container}>
        <img src="/img/year2026.jpg" className={st.img} />
        </div>
    )
}


export default YearSymbol;