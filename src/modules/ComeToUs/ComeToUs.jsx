import React from "react";
import st from './ComeToUs.module.scss';
import { motion } from "framer-motion";

const ComeToUs = ({id}) => {
    return(
        <motion.div className={st.container} id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} >
            <span className={st.title}>Схема проезда</span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1500.9746969399143!2d26.229228081215194!3d53.03725011240861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sby!4v1733128562349!5m2!1sru!2sby" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={st.frame}></iframe>
        </motion.div>
    )
}

export default ComeToUs;