import s from './Popup.module.css'
import {useEffect, useState} from "react";



export default function Popup(status) {
    let [timer, setTimer] = useState(false)
    useEffect(() =>{
        setTimeout(() => {
            setTimer(true)
        }, 2000)
    }, [timer])

    return (
        <div className={s.container}>
            {
                timer !== true ?
                    <div className={s.popup}>
                        <p className={s.text}>You are in editing mode!</p>
                    </div>
                    :
                    <div></div>
            }
        </div>


    );
}