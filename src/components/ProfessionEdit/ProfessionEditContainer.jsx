import React, {useEffect, useState} from "react";
import ProfessionEdit from "./ProfessionEdit";
import {useParams} from "react-router-dom";
import s from "./ProfessionEdit.css"
import ProfService from "../API/ProfService";
import {useFetching} from "../hooks/useFetching";

const ProfessionEditContainer = () => {

    const [ProfState = '', setProfState] = useState();
    const [NameState = '', setNameState] = useState();
    const [fetchContent, isPostLoading, postError] = useFetching(async ()=>{
        const content = await ProfService.getContentById(id)
        setProfState(content)

    })

    const { id } = useParams();

     useEffect(() => {
         setProfState("")
         fetchName(id)
         fetchContent(id)
     }, [id]);


    async function fetchName(id){
        const name = await ProfService.getNameById(id)
        setNameState(name)
    }



        return(
            <div>

                {isPostLoading
                    ? <img className={s.Load} src={"https://usagif.com/wp-content/uploads/loading-96.gif"} />
                    : <ProfessionEdit error={postError} prof={ProfState} names={NameState}/>}
            </div>



)




}

export default ProfessionEditContainer;