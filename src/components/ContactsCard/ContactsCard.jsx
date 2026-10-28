import React from "react";
import st from './ContactsCard.module.scss';


const ContactsCard = ({title,img,name,phone}) => {
    return(
        <div className={st.container}>
            <span className={st.title}>{title}</span>
            <img src={`/img/${img}`} className={st.img}/>
            <span className={st.name}>{name}</span>
            <span className={st.phone}><a className={st.link} href={'tel:'+ phone}>{phone}</a></span>
        </div>
    )
}


export default ContactsCard;