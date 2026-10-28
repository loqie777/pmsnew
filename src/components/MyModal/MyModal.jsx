import React from "react";
import st from './MyModal.module.scss';
import { motion,AnimatePresence } from "framer-motion";
import Logo from "../Logo/Logo";
import { Link } from "react-router";

const MyModal = ({visible,setVisible}) => {

    return(
        <div className={visible ? st.containerActive : st.container} onClick={() => setVisible(!visible)}>
            <div className={st.modalContainer} onClick={(e) => e.stopPropagation()}>
                <div className={st.linkContainer}>
                <Link className={st.link} to='/#services' onClick={() => setVisible(!visible)}>Услуги</Link>
                <Link className={st.link} to="/#aboutus" onClick={() => setVisible(!visible)}>О нас</Link>
                <Link className={st.link} to="/#contacts" onClick={() => setVisible(!visible)}>Контакты</Link>
                <Link className={st.link} to="/#history" onClick={() => setVisible(!visible)}>История</Link>
                <Link className={st.link} to='/news' onClick={() => setVisible(!visible)}>Новости</Link>
                <Link className={st.link} to="/#vacancies" onClick={() => setVisible(!visible)}>Вакансии</Link>
                <Link className={st.link} to="/#cometous" onClick={() => setVisible(!visible)}>Схема проезда</Link>
                <Link className={st.link} to="/ideolog" onClick={() => setVisible(!visible)}>Идеологическая работа</Link>
                <Link className={st.link} to="/land" onClick={() => setVisible(!visible)}>Благоустройство</Link>
                <Link className={st.link} to="/sport" onClick={() => setVisible(!visible)}>Спорт</Link>
                <Link className={st.link} to="/melioration" onClick={() => setVisible(!visible)}>Мелиорация</Link>
                </div>
            </div>
        </div>
    )
}


export default MyModal;