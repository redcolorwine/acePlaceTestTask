import React, { useState } from 'react'
import cmedia from './fountItem.module.css';
import ModalWindow from '../modalWindow/ModalWindow';

const FoundItem = ({ cname, manager, post, address }) => {
    const [modal, setModal] = useState(false);
    const handleModal = (event) => {
        event.preventDefault();
        setModal(!modal);
    }

    return (
        <div className={cmedia.foundItem}>
            {modal && <ModalWindow handleModal={handleModal} address = {address} />}
            <h4>{cname ? cname : 'Отсутствуют данные'}</h4>
            <p>Основатель: {manager ? manager : 'Отсутствуют данные'}</p>
            <p>Должность: {post ? post : 'Отсутствуют данные'}</p>
            <p>Адрес: <a href='#' onClick={(event) => handleModal(event)}>{address.unrestricted_value ? address.unrestricted_value : 'Отсутствуют данные'}</a></p>
        </div>
    )
}

export default FoundItem