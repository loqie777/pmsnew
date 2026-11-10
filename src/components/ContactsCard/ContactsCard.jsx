import React from "react";
import st from './ContactsCard.module.scss';

const ContactsCard = ({ title, img, name, phone }) => {
  return (
    <div className={st.container}>
    
      <div className={st.cardHeader}>
        <span className={st.title}>{title}</span>
      </div>

    
      <div className={st.imgWrapper}>
        <img src={`/img/${img}`} className={st.img} alt={title} />
      </div>

     
      <div className={st.info}>
        <span className={st.name}>{name}</span>
        <a className={st.link} href={`tel:${phone}`}>{phone}</a>
      </div>
    </div>
  );
}

export default ContactsCard;
