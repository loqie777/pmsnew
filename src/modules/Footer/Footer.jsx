import React from "react";
import st from './Footer.module.scss';
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import YearSymbol from "../../components/YearSymbol/YearSymbol";
import FooterInfo from "../../components/FooterInfo/FooterInfo";


const Footer = () => {
    return(
        <div className={st.container}>
            <div className={st.block}>
            <Logo/>
            <NavBar/>
            </div>
            <div className={st.block1}>
            <FooterInfo/>
            </div>
        </div>
    )
}


export default Footer;