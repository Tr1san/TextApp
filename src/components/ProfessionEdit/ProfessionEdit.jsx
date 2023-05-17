import React, {useCallback, useEffect, useState} from "react";
import "./ProfessionEdit.css";
import Settings from "./../../media/Settings.png"

import {NavLink, useParams} from "react-router-dom";
import Edit from "../../media/Edit.png";
import Download from "../../media/Download.png";
import Delete from "../../media/Delete.png";
import ProfService from "../API/ProfService";


const ProfessionEdit = ({names, prof, error}) => {

    const [modalActive, setModalActive] = useState()
    const [content, setContent] = useState();
    const [name = names, setName] = useState();
    const [Edit, setEdit] = useState();
    const [notes, setNotes] = useState();
    const [editNum, setEditNum] = useState(null);

    const { id } = useParams();

    async function GetDelete(id){
        await ProfService.getDelete(id)
        window.location.reload();
    }

    const onSendData = useCallback(() => {
        setContent(notes)
        const dataC = {
            id,
            content
        }
        fetch('http://localhost:8080/menu/updateInstruction', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataC)
        })
        const dataN = {
            id,
            name
        }
        fetch('http://localhost:8080/menu/updateName', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataN)
        })
        setEdit(false)
        window.location.reload();
    }, [id, name, content])

    const onSendDataDowload = () => {
        const data = {
            id: id,
            name: name,
        }
        fetch('http://localhost:8080/menu/downloadFile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then( res => res.blob() )
            .then( blob => {
                var file = window.URL.createObjectURL(blob);
                window.location.assign(file);
            });

    }

    let i = 0

    useEffect(() => {
        setName(names.name)
        setContent(prof.content)
        setNotes(prof.content)
    }, [names, prof, setModalActive]);


    const onChangeContent = (e) => {
        setContent([e.target.value.split(' ')])
    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    let result
    if (notes != undefined){
         result = notes.map((note, index) => {
            return <p key={index} onClick={() => setEditNum(index)}>
                {note.join(" ")}
            </p>;
        });
    }
    function changeItem(event) {
        setNotes([...notes.slice(0, editNum), event.target.value.split(','), ...notes.slice(editNum + 1)]);
        setContent(notes)
    }

        return(
            <div>
                <div key={names.id} className={'ContainerT'}>
                    <div className={'title'}>
                        <div className={'item'}>
                            <input value={name} onChange={onChangeName} className={Edit ? "item" : "InfoHide"} ></input>
                            <div className={Edit ? "InfoHide" :  "item"}>{names.name}</div>
                        </div>
                        <div onClick={() => (setEdit(true), setModalActive(false))} className={"modalBtn"}>
                            <img src={Settings}/>
                        </div>
                        <div onClick={() => (setEdit(false), onSendDataDowload())} className={"modalBtn"}>
                            <img src={Download}/>
                        </div>
                        <NavLink to={'/'}>
                            <div onClick={() => (GetDelete(id), setModalActive(false))} className={"modalBtn"}>
                                <img src={Delete}/>
                            </div>
                        </NavLink>
                    </div>

                    {prof.content == undefined || ''
                        ? <div>Данные не обработанны !</div>
                        : <div className={'ContainerE'}>
                            <div className={Edit ? "textareaActive"&&"Info" : "textarea"}>
                                {result}
                                {notes == undefined
                                    ? <p>dsdsds</p>
                                    : <textarea rows={3} value={ notes[editNum]} onChange={changeItem} />
                                }
                            </div>
                            <div className={Edit ? "InfoHide" : 'Info'}>
                                {prof.content.map(txt => <p on key={i++}>{}{txt.join(" ")}</p>)}
                            </div>
                        </div>

                    }

                    <div className={'BtnSend'}>
                        <button onClick={onSendData} className={Edit ? "" : 'InfoHide'} >Отправить</button>
                    </div>
                </div>
            </div>

        )

}

export default ProfessionEdit;