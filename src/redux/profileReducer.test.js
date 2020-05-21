import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import ReactDOM from "react-dom";
import React from "react";

let state = {
    posts: [
        {title: 'How to get Ielts Band 8.0?', author: 'Rakhat K.', likes: 85},
        {title: 'How to get into US college?', author: 'Dias U..', likes: 85},
        {title: 'How to How to?', author: 'Zharken U.', likes: 85}
    ]
}

it('new post should be added', () => {
    //1. test data
   let action = addPostActionCreator("Hello World!");
   //2. action
   let newState = profileReducer(state, action)

    //3. exception
    expect(newState.posts.length).toBe(4);
});

it('post with selected id should be deleted', () => {
    //1. test data
    let action = deletePost(1);
   //2. action
   let newState = profileReducer(state, action);

    //3. exception
    expect(newState.posts.length).toBe(3);
});