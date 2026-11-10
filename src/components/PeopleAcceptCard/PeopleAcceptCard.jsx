import React from "react";
import st from './PeopleAcceptCard.module.scss';
import { motion } from "framer-motion";

const PeopleAcceptCard = ({ name, info, number, time, position }) => {
  return (
    <motion.div 
      className={st.container}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className={st.name}>{name}</h3>
      
      
      
      <p className={st.info}>{info}</p>
      
      <div className={st.meta}>
        
        <div className={st.metaItem}>
          <span className={st.label}>Телефон:</span>
          <a className={st.link} href={`tel:${number}`}>{number}</a>
        </div>
      </div>
    </motion.div>
  );
}

export default PeopleAcceptCard;
