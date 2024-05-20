import React, { useRef } from 'react'
import cmedia from './main.module.css';
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
    const inpRef = useRef();
    const history = useNavigate();
    const sendInn = () => {
        history(`/info/${inpRef.current.value}`)
    }
    return (
        <div className={cmedia.main}>
            <h1>Поиск организаций по ИНН</h1>
            <div className={cmedia.mainWrapper}>
                <form onSubmit={sendInn}>
                    <input type="number" required ref={inpRef} placeholder='   Укажите ИНН'/>
                    <input type="submit" value="Поиск" />
                </form>

            </div>
        </div>
    )
}

export default Main