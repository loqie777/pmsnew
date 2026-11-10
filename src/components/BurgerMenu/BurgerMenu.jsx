import React from "react";
import st from './BurgerMenu.module.scss';

const BurgerMenu = ({ onClick, isOpen }) => {
  return (
    <button 
      className={`${st.burgerBtn} ${isOpen ? st.open : ''}`} 
      onClick={onClick}
      aria-label="Переключатель меню"
    >
      <span className={st.line}></span>
      <span className={st.line}></span>
      <span className={st.line}></span>
    </button>
  );
};

export default BurgerMenu;
