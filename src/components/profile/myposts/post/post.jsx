import React from "react";
import s from './post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
                alt="avatar"/>
            {props.title}
            <div>
                <a href="#">{props.author}</a>
                <span> {props.likes} likes</span>
            </div>
        </div>
    );
}
export default Post