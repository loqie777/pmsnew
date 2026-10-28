import React from "react";
import st from './NewsModule.module.scss';
import NewsMainCard from "../../components/NewsMainCard/NewsMainCard";
import news from '../../consts/newsconsts.js'
import { useNavigate } from "react-router";
import { motion} from "framer-motion";

const NewsModule = () => {
    const nav = useNavigate();
    return(
        <motion.div className={st.container} id="news"
         initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }} >
            <span className={st.title}>Новости</span>
            {news.map((ne,index) => <NewsMainCard img = {ne.img} title = {ne.title} text={ne.text} date={ne.date} key={index}/>)}
            <button className={st.btn} onClick={() => nav('/news')}>Подробнее</button>
        </motion.div>
    )
}

export default NewsModule;