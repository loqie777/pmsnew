import React from "react";
import st from './Services.module.scss';
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import  arr  from '../../consts/servicesconst.js';
import { motion } from "framer-motion";

const Services = ({ id }) => {
  return (
    <motion.div 
      className={st.center} 
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >

      <div className={st.titleWrapper}>
        <h2 className={st.titlte}>Направления деятельности</h2>
        <div className={st.line}></div>
      </div>

  
      <div className={st.container}>
        {arr.map((el, index) => (
          <ServiceCard 
            key={index}
            name={el.name} 
            img={el.img} 
            desc={el.desc} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
