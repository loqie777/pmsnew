import React from "react";
import st from './Services.module.scss';
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import arr from './../../consts/servicesconst.js';
import { motion } from "framer-motion";

const Services = ({id}) => {
    return(
        <motion.div className={st.center} id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }} 
        >
                <span className={st.titlte}>НАШИ УСЛУГИ</span>
            <div className={st.container}>
            {   arr.map((el,index) => <ServiceCard name = {el.name} img = {el.img} key={index}/>)}
            </div>
        </motion.div>
    )
}


export default Services;

