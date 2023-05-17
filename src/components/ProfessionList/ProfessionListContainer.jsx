import React, {useEffect, useState} from "react";
import s from "./ProfessionList.module.css"
import ProfessionList from "./ProfessionList";
import ProfService from "../API/ProfService";

const prod = [
    {id: '1', name: 'Доцент'},
    {id: '2', name: 'Лаборант'},
    {id: '3', name: 'Старший преподаватель'},
]


const ProfessionListContainer = () => {

    const [appState , setAppState] = useState();

    useEffect(() => {
        fetchProf()
    }, []);

    async function fetchProf(){
        const profs = await ProfService.getAll()
        setAppState(profs)
    }

    if (appState) {
        return (
            <ProfessionList prof={appState}/>
        )
    } else {
        return (
            <img className={s.Load} src={"https://usagif.com/wp-content/uploads/loading-96.gif"}/>
        );
    }
}



export default ProfessionListContainer;