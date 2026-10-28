import React from "react";
import st from './Logo.module.scss';
import {useNavigate } from "react-router";

const Logo = () => {
    const navigate = useNavigate();

    return(
        <div className={st.container} onClick={() => navigate('/')}>
            <img src="/img/gerb.jpg" className={st.logo} />
            <img src="/img/logo.png" alt="logo" className={st.logo} />
            <span className={st.title}>УП "Ляховичское ПМС"</span>
        </div>
    )
}

export default Logo;