import React, { useState } from "react";
import st from './Header.module.scss';
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import MyModal from "../../components/MyModal/MyModal";
import ContactHeader from "../../components/ContactHeader/ContactHeader";



const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={st.container}>
      <div className={st.block}>
        <div className={st.leftSide}><Logo /></div>
        <div className={st.centerSide}><NavBar /></div>
        <div className={st.rightSide}>
          <ContactHeader />
          <BurgerMenu onClick={() => setVisible(!visible)} isOpen={visible} />
        </div>
      </div>
      <MyModal visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default Header;

