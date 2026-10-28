import React from "react";
import st from './Miliorationmodule.module.scss';
import MeliorationGalery from "../../components/MeliorationGalery/MeliorationGalery";


const Miliorationmodule = () => {
    return(
        <div className={st.container}>
            <h2>Фотогалерея нашей работы</h2>
            <MeliorationGalery/>
        </div>
    )
}

export default Miliorationmodule;