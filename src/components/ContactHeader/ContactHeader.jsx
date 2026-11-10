import React from "react";
import st from './ContactHeader.module.scss'
import { Phone } from 'lucide-react';

const ContactHeader = () => {
    return(
        <div className={st.container}>
            <a href="tel: +375163321539" className={st.linkbtn}>
                <Phone color="White"/>
                <span className={st.text}>Позвонить</span>
            </a>
        </div>
    )
}


export default ContactHeader;