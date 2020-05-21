import React from "react";
import s from './Dialogs.module.css'
import Chats from "./Chats/Chats";
import Message from "./Messages/Messages";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";

let maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textarea}>
                <Field component={Textarea} validate={[required, maxLength50 ]} name="newMessageBody" placeholder="Enter your message" />
                <button>Send</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(dialog => <Chats name={dialog.name} id={dialog.id}/>);
    let MessagesElements = props.messages.map(message => <Message id={message.id} sender={message.sender}
                                                                  message={message.message}/>);

    let updateNewMessageText = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body);
    }
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    let sendMessage = () => {
        props.sendMessage();
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div>
                <div className={s.messages}>
                    {MessagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

export default Dialogs