import React from "react";
import st from './PeopleAcceptCard.module.scss';
import { motion } from "framer-motion";


const PeopleAcceptCard = ({name,info,number,time,position}) => {
    return(
        <motion.div className={st.container}
        initial={{ opacity: 0, y: position }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: time, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }} >
            <h3>{name}</h3>
            <p>{info}</p>
            <p><strong><a className={st.link} href={'tel:' + number}>{number}</a></strong></p>
        </motion.div>
    )
}


export default PeopleAcceptCard;