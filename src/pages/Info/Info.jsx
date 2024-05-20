import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import cmedia from './info.module.css';
import ModalWindow from '../../components/modalWindow/ModalWindow';
import FoundItem from '../../components/foundItem/FoundItem';

const Info = (props) => {

    const token = `802436b1498887f6024cdfd791661023fd547f13`;
    const { id } = useParams();
    const [innData, setInnData] = useState('');
  
    const query = id;

    const getData = async () => {

        const res = await axios({
            method: 'post',
            url: `http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            data: JSON.stringify({ query: query })
        });

        setInnData(res.data.suggestions)
        console.log(res.data.suggestions)
        res.data.suggestions.forEach(el => console.log(el.data.name.full_with_opf))
    }

    useEffect(() => {
        getData();
    }, [])

    if (!innData) {
        return (
            <div>
                <h2>Загрузка...</h2>
            </div>
        )
    }

    if (innData.length > 0) {
        return (<div className={cmedia.info}>

            <h1>Найдено <span>{innData.length} </span> совпадений по ИНН с номером {query}</h1>
            <a href="/">Вернуться на главную</a>
          

            <div className={cmedia.foundItems}>

                {innData.map((el, index) => {
                    return <>
                        <FoundItem key={index} cname={el.data.name.full_with_opf ? el.data.name.full_with_opf : 'Отсутствует'}
                            address={el.data.address ? el.data.address : 'Отсутствует'}
                            manager={el.data.management?.name ? el.data.management.name : 'Отсутствует'}
                            post={el.data.management?.post ? el.data.management.post : 'Отсутствует'} />
                    </>
                })}

            </div>

        </div>)
    }

    if (innData.length == 0) {
        return (<div className={cmedia.info}>
            <h1>Найдено <span>{innData.length} </span> совпадений по ИНН с номером {query} </h1>
        </div>)
    }

}

export default Info