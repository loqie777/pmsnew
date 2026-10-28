import React from "react";
import st from './FeedBack.module.scss';
import consts from '../../consts/feedbackconsts.js'
import FeedBackCard from "../../components/FeedBackCard/FeedBackCard";
import { motion } from "framer-motion";

const FeedBack = ({id}) => {
    return(
        <motion.div className={st.center} id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} >
                <span className={st.titlte}>ОБРАТНАЯ СВЯЗЬ</span>
            <div className={st.container}>
                {consts.map((el,index) => <FeedBackCard img={el.img} name={el.name} info={el.info} key={index}/>)}
            </div>
        </motion.div>
    )
}


export default FeedBack;