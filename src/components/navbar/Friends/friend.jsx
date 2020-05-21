import React from "react";
import s from './../nav.module.css';

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <h5>{props.name}</h5>
            <img src={props.imageSrc} alt="avatar"/>
        </div>
    );
}

export default Friend