import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";
import {Redirect} from "react-router-dom";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer  />
        </div>
    );
}
export default Profile