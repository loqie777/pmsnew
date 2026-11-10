import React from "react";
import st from './Landscapingmodule.module.scss';
import arr from '../../consts/landscapingconsts.js';
import LandscapingCard from "../../components/landscapingCard/LandscapingCard";
import LandGalery from "../../components/LandGalery/LandGalery.jsx";

const Landscapingmodule = () => {
  return (
    <div className={st.container}>

      <div className={st.cardList}>
        {arr.map((el, index) => (
          <LandscapingCard 
            key={index}
            img={el.img} 
            text={el.text} 
            title={el.title} 
            date={el.date} 
          />
        ))}
      </div>


      <LandGalery />
    </div>
  );
};

export default Landscapingmodule;
