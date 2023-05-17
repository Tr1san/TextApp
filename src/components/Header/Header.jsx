import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import Add from "./../../media/Home.png"
import Update from "./../../media/Update.png"

const Header = () => {

    const rerender = ()=>{
        window.location.reload();
    }

    return(
        <div className={s.Header}>
            <div className={s.Container}>
                <NavLink to={"/"} className={s.HederItem}>
                    <img className={s} src={Add} />
                </NavLink>
                <NavLink onClick={rerender}  className={s.HederItem}>
                    <img className={s.Home} src={Update} />
                </NavLink>
            </div>


        </div>
    )
}

export default Header;