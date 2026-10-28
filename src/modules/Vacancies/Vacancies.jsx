import React from "react";
import st from './Vacancies.module.scss';
import vacancies from "../../consts/vacanciesconsts.js";
import VacanciesCard from "../../components/VacanciesCard/VacanciesCard";
import { motion } from "framer-motion";

const Vacancies = ({id}) => {
    return(
        <motion.div className={st.center} id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }} >
                <span className={st.titlte}>ВАКАНСИИ</span>
            <div className={st.container}>
            {   vacancies.map((el,index) => <VacanciesCard name = {el.name} img = {el.img} key={index}/>)}
            </div>
        </motion.div>
    )
}


export default Vacancies;