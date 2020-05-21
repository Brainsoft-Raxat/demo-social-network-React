import React from "react";
import s from './MyPosts.module.css';
import Post from "./post/post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormControls";

let maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required,maxLength10]} component={Textarea} placeholder="Add new post" name="newPostField" />
            </div>
            <div>
                <button >Add Post</button>
            </div>
        </form>
    );
}

const AddPostsReduxForm = reduxForm({form: "addPost"})(AddPostForm);

const MyPosts = React.memo((props) => {
    console.log("render");
    let Posts = props.posts.map(p => <Post title={p.title} author={p.author} likes={p.likes}/>);

    let addPost = (values) => {
        props.addPost(values.newPostField);
    }

    return (
        <div className={s.posts}>
            <div>
                <h3>Add Post</h3>
                <AddPostsReduxForm onSubmit={addPost}/>
                {/*<div>
                    <textarea  onChange={onPostChange} value={props.newPostText}  />
                </div>
                <button onClick={addPost}>Add</button>*/}
            </div>
            <h2>My posts</h2>
            <div className={s.posts}>
                {Posts}
            </div>
        </div>
    )
});

export default MyPosts