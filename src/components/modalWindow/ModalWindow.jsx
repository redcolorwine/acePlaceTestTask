import React from 'react'
import cmedia from './modalWindow.module.css';
import { useNavigate } from 'react-router-dom';

const ModalWindow = (props) => {

    const goMaps = () => {
        window.location.href=`https://www.google.com/maps?ll=${props.address.data.geo_lat},${props.address.data.geo_lon}`;
    }

    return (
        <div className={cmedia.modal}>
            <h4>Вы действительно хотите перейти на внешний ресурс?</h4>
            <div className={cmedia.modalButts}>
                <button className={cmedia.refuse} onClick={(event) => props.handleModal(event)}>
                    Отказаться
                </button>
                <button className={cmedia.go} onClick={()=>goMaps()}>
                    Перейти
                </button>
            </div>
        </div>
    )
}

export default ModalWindow