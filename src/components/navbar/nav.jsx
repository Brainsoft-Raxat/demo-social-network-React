import React from "react";
import s from './nav.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friends/friend";

const Nav = (props) => {

    let friendsList = props.nav.friends.map(friend => <Friend name={friend.name} imageSrc={friend.imageSrc}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <h3>Friends:</h3>
            <div className={s.friends}>
                {friendsList}
            </div>
        </nav>
    );
}

export default Nav