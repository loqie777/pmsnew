import React from "react"
import Header from "../modules/Header/Header";
import st from './Main.module.scss'
import Slider from "../modules/Slider/Slider";
import Services from "../modules/Services/Services";
import AboutUs from "../modules/AboutUs/AboutUs";
import NewsModule from "../modules/NewsModule/NewsModule";
import Contacts from "../modules/Contacts/Contacts";
import Vacancies from "../modules/Vacancies/Vacancies";
import FeedBack from "../modules/FeedBack/FeedBack";
import PeopleAccept from "../modules/PeopleAccept/PeopleAccept";
import History from "../modules/History/History";
import ComeToUs from "../modules/ComeToUs/ComeToUs";
import Footer from "../modules/Footer/Footer";
import { useLocation } from "react-router";
import { useEffect } from "react";








const Main = () => {

    const { hash } = useLocation(); useEffect(() => { if (hash) { const element = document.querySelector(hash); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } } }, [hash]);

    return(
        <div className={st.page}>
            <Header/>
            <Slider/>
            <AboutUs id={'aboutus'}/>
            <Services id={"services"}/>
            <Contacts id={"contacts"}/>
            <PeopleAccept/>
            <NewsModule/>
            <History/>
            <Vacancies id={"vacancies"}/>
            <FeedBack id = {'feedback'}/>
             <Footer/>
        </div>
    )
    
}


export default Main;