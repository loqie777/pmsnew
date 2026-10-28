import React, { useState } from "react";
import st from './Header.module.scss';
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import MyModal from "../../components/MyModal/MyModal";



const Header = () => {
    const [visible,setVisible] = useState(false);

    return(
        <div className={st.container}>
            <div className= {st.block}>
            <Logo/>
            <NavBar/>
            <BurgerMenu onClick={() => setVisible(!visible)}/>
            <MyModal visible={visible} setVisible={setVisible}/>
            </div>
        </div>
    )
}


export default Header;