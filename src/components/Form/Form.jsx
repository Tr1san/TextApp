import React, {useCallback, useRef, useState} from "react";
import s from "./Form.module.css"
import axios from "axios";

function Form() {

    const [file, setFile] = useState('')
    const [name, setName] = useState("")
    const ref = useRef()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    const onChangeName = (e) => {
        setName(e.target.value)

    }

    if (file == undefined){
        setFile('')
    }

    function handleSubmit(event) {
        event.preventDefault()
        const url = 'http://localhost:8080/menu/uploadFile';
        const formData = new FormData();
        console.log(name)
        formData.append('name', name);
        formData.append('file', file);
        console.log(formData)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });
        setName('')
        ref.current.value = ""
        window.location.reload();
    }


    return (
        <div className={s.Form}>
            <div className={s.Container}>
                <div className={s.title}>
                    <div className={s.add}>Добавить должностную инструкцию</div>
                </div>
                <div className={s.InputContainer}>
                    <form onSubmit={handleSubmit}>
                        <div className={s.inputTitle}>
                            <input
                                className={s.input}
                                placeholder={'Название'}
                                type="text"
                                value={name}
                                onChange={onChangeName}
                            />
                        </div>

                        <div className={s.inputTitle}>
                            <input className={s.inputFile} type="file" ref={ref} onChange={handleChange}/>
                        </div>
                        {(file && name) == ""
                            ? <div></div>
                            : <div className={s.send}>
                                <button type="submit" >Отправить</button>
                            </div>
                        }

                    </form>
                </div>
            </div>
        </div>
    );
}


export default Form;