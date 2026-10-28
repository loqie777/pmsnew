import React from "react";
import st from './NavBar.module.scss';
import { Link } from "react-router";

const NavBar = () => {

    return(
        <div className={st.container}>
            <Link className={st.link} to="/#aboutus">О нас</Link>
            <Link className={st.link} to="/#contacts">Контакты</Link>
            <Link className={st.link} to="/land">Благоустройство</Link>
            <Link className={st.link} to='/#news'>Новости</Link>
            <Link className={st.link} to="/ideolog">Идеологическая работа</Link>
            <Link className={st.link} to="/sport">Спорт</Link>
            <Link className={st.link} to="/melioration">Мелиорация</Link>
        </div>
    )
}

export default NavBar;