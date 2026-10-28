import React from "react";
import st from './BurgerMenu.module.scss';



const BurgerMenu = ({onClick}) => {
    return(
        <div className={st.container} onClick={onClick}>
            <img src="/img/menu-svgrepo-com.png" className={st.menuimg}/>
        </div>
    )
}


export default BurgerMenu;