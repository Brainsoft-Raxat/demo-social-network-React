import React from "react";
import s from './../Dialogs.module.css'

const Message = (props) => {

    if (props.sender == 'me') {

        return (
            <div className={s.messageOut}>
                <div className={s.item}>
                    {props.message}
                </div>
            </div>
        );
    } else {
        return (
            <div className={s.messageIn}>
                <div className={s.item}>
                    {props.message}
                </div>
            </div>
        );

    }
}


export default Message