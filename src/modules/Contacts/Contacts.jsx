import React from "react";
import st from './Contacts.module.scss';
import ContactsCard from "../../components/ContactsCard/ContactsCard";
import contactarr from '../../consts/contactsconsts.js'
import { motion } from "framer-motion";

const Contacts = ({id}) => {
    return(
        <motion.div className={st.center} id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }} 
        >
                <span className={st.titlte}>КОНТАКТЫ</span>
            <div className={st.container}>
            {contactarr.map((cont,index) => <ContactsCard name={cont.name} img={cont.img} title={cont.title} phone={cont.phone} key={index}/>)}
            </div>
        </motion.div>
    )
}


export default Contacts;