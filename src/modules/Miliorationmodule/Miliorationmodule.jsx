import React from "react";
import st from './Miliorationmodule.module.scss';
import MeliorationGalery from "../../components/MeliorationGalery/MeliorationGalery";

const Miliorationmodule = () => {
  return (
    <div className={st.container}>
      <div className={st.titleWrapper}>
        <h2 className={st.title}>Фотогалерея нашей работы</h2>
        <div className={st.line}></div>
      </div>
      
      <MeliorationGalery />
    </div>
  );
};

export default Miliorationmodule;
