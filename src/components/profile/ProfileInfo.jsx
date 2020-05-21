import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <h2>{props.profile.fullName}</h2>
                {/*<div className={s.content}>
                    <img src="https://apeaksolutions.com/wp-content/uploads/2018/02/header-bg.png"
                         alt="image"/>
                </div>*/}
                <div>
                    <img src={props.profile.photos.large} alt=""/>
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>

        );
    }
}
export default ProfileInfo