import React from "react";
import Profession from "../Profession/Profession";
import s from "./ProfessionList.module.css"

const ProfessionList = (prof) => {

    return(
        <div className={s.ProfessionList}>
            <div className={s.container}>
                {prof.prof.map(prod=> (
                    <Profession
                        key={prod.id}
                        name={prod.name}
                        id={prod.id}
                    />
                ))}
            </div>
        </div>

    )}


export default ProfessionList;