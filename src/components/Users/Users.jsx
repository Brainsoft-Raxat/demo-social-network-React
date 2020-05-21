import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination";
import {setCurrentPage} from "../../redux/usersReducer";

let Users = (props) => {
    return (
        <div>
            <Pagination currentPage = {props.currentPage} onPageChanged = {props.onPageChanged} totalItemsCount ={props.totalItemsCount} pageSize = {props.pageSize}/>
            {props.users.map(u => {
                return <div key={u.id}>
        <span><div>
            <NavLink to={`/profile/${u.id}`}><img
                src={u.photos.small != null ? u.photos.small : "https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg"}
                alt="" className={s.avatar}/>
                </NavLink>
        </div>
        <div>
            {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
               props.unfollow(u.id);
                }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.follow(u.id);

                }}>Follow</button>}
        </div></span>
                    <span>
            <span>
                <div>{u.name}</div><div>{u.status}</div>
            </span>
            <span>
                <div>"u.location.city"</div><div>"u.location.country"</div>
            </span>
        </span>
                </div>
            })}
        </div>
    );
}

export default Users