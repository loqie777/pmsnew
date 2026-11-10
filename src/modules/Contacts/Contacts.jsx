import React from "react";
import st from './Contacts.module.scss';
import ContactsCard from "../../components/ContactsCard/ContactsCard";
import contactarr from '../../consts/contactsconsts.js'; 
import { motion } from "framer-motion";

const Contacts = ({ id }) => {
  return (
    <motion.div 
      className={st.center} 
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
     
      <div className={st.titleWrapper}>
        <h2 className={st.title}>Контакты</h2>
        <div className={st.line}></div>
      </div>


      <div className={st.container}>
        {contactarr.map((cont, index) => (
          <ContactsCard 
            key={index} 
            title={cont.title}
            img={cont.img} 
            name={cont.name} 
            phone={cont.phone} 
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Contacts;
