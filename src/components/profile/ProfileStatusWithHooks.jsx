import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange =(e) => {
        setStatus(e.currentTarget.value);
    }

        return (<>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "Enter your Status"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange}
                               autoFocus={true}
                               type="text"
                               value={status}
                               onBlur={deactivateEditMode}/>
                    </div>
                }
            </>
        );
    }

export default ProfileStatusWithHooks