import React from "react";
import st from './PeopleAccept.module.scss';
import arr from '../../consts/peopleacceptconsts.js'
import PeopleAcceptCard from "../../components/PeopleAcceptCard/PeopleAcceptCard";
import { motion } from "framer-motion";

const PeopleAccept = () => {
    return(
        <motion.div className={st.center} id="pplaccept"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }} >
                <span className={st.titlte}>ПРИЁМ ГРАЖДАН</span>
            <div className={st.container}>
                {arr.map((el,index) => <PeopleAcceptCard name={el.name} info={el.info} number={el.number} time={el.time} position={el.position} key={index}/>)}
            </div>
        </motion.div>
    )
}


export default PeopleAccept;