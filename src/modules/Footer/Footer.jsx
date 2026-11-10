import React from "react";
import st from './Footer.module.scss';
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import FooterInfo from "../../components/FooterInfo/FooterInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={st.footer}>
      <div className={st.container}>
        
        <div className={st.topRow}>
          <Logo />
          <div className={st.navWrapper}>
            <NavBar />
          </div>
        </div>

        <div className={st.middleRow}>
          <FooterInfo />
        </div>

        <div className={st.bottomRow}>
          <span className={st.copy}>
            © {currentYear} УП "Ляховичское ПМС". Все права защищены.
          </span>
          {/* <span className={st.developer}>
            Разработка сайта — loqie
          </span> */}
        </div>

      </div>
    </footer>
  );
}

export default Footer;
