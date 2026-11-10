import React from "react";
import st from './NavBar.module.scss';
import { Link } from "react-router";
import { motion } from "framer-motion";


const listVariants = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    display: "block",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 18,
      staggerChildren: 0.08,
      delayChildren: 0.05    
    }
  },
  closed: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transitionEnd: { display: "none" },
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 18,
      staggerChildren: 0.05,
      staggerDirection: -1 
    }
  }
};


const itemVariants = {
  open: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  },
  closed: { 
    opacity: 0, 
    y: -8 
  }
};

const NavBar = () => {
  return (
    <div className={st.container}>
      <nav className={st.nav}>
        
   
        <motion.div className={st.dropdown} initial="closed" whileHover="open">
          <span className={st.dropdownTitle}>О предприятии</span>
          <motion.div className={st.dropdownMenu} variants={listVariants}>
            <motion.div variants={itemVariants}>
              <Link className={st.link} to="/#services">Услуги</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className={st.link} to="/#aboutus">О нас</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className={st.link} to="/#vacancies">Вакансии</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className={st.link} to="/#contacts">Контакты</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className={st.link} to="/#history">История</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className={st.link} to="/ideolog">Идеологическая работа</Link>
            </motion.div>
          </motion.div>
        </motion.div>

    
        <motion.div className={st.dropdown} initial="closed" whileHover="open">
          <span className={st.dropdownTitle}>Деятельность</span>
          <motion.div className={st.dropdownMenu} variants={listVariants}>
            <motion.div variants={itemVariants}>
              <Link className={st.link} to="/melioration">Мелиорация</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className={st.link} to="/land">Благоустройство</Link>
            </motion.div>
          </motion.div>
        </motion.div>


        <motion.div className={st.dropdown} initial="closed" whileHover="open">
          <span className={st.dropdownTitle}>Новости</span>
          <motion.div className={st.dropdownMenu} variants={listVariants}>
            <motion.div variants={itemVariants}>
              <Link className={st.link} to="/news">Новости</Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link className={st.link} to="/sport">Спорт</Link>
            </motion.div>
          </motion.div>
        </motion.div>

      </nav>
    </div>
  );
};

export default NavBar;
