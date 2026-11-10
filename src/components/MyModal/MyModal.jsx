import React from "react";
import st from './MyModal.module.scss';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";


const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};


const menuVariants = {
  hidden: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  visible: { 
    x: 0, 
    transition: { 
      type: "tween", 
      duration: 0.3,
      staggerChildren: 0.05, 
      delayChildren: 0.1
    } 
  }
};


const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } }
};

const MyModal = ({ visible, setVisible }) => {
  const closeMenu = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          className={st.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={closeMenu}
        >
          <motion.div 
            className={st.modalContainer}
            variants={menuVariants}
            onClick={(e) => e.stopPropagation()} 
          >
            <div className={st.linkContainer}>
              {[
                { to: "/#services", label: "Услуги" },
                { to: "/#aboutus", label: "О нас" },
                { to: "/#contacts", label: "Контакты" },
                { to: "/#history", label: "История" },
                { to: "/news", label: "Новости" },
                { to: "/#vacancies", label: "Вакансии" },
                { to: "/ideolog", label: "Идеологическая работа" },
                { to: "/land", label: "Благоустройство" },
                { to: "/sport", label: "Спорт" },
                { to: "/melioration", label: "Мелиорация" }
              ].map((item, index) => (
                <motion.div variants={linkVariants} key={index}>
                  <Link className={st.link} to={item.to} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MyModal;
