import React from "react";
// import s from "./Profession.css"
import "./Profession.css"
import {BrowserRouter, Navigate, NavLink, useNavigate} from "react-router-dom";

const Profession = (props) => {

    return(
            <NavLink key={props.id} to={`/profession/`+ props.id}  className="Profession" >{props.name}</NavLink>
    )
}

export default Profession;