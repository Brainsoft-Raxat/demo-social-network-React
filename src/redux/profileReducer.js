import {UserAPI} from "../api/UserAPI";
import {ProfileAPI} from "../api/ProfileAPI";

const ADD_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
    posts: [
        {title: 'How to get Ielts Band 8.0?', author: 'Rakhat K.', likes: 85},
        {title: 'How to get into US college?', author: 'Dias U..', likes: 85},
        {title: 'How to How to?', author: 'Zharken U.', likes: 85}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            return {
                ...state,
                posts: [...state.posts, {
                    title: action.newPostText,
                    author: 'Rakhat K',
                    likes: 15
                }]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId )
            }
        }
        default:
            return state;

    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const setUserProfile = (userId) => {
    return (dispatch) => {
        ProfileAPI.showProfile(userId)
            .then(response => {
                dispatch(setUserProfileSuccess(response.data));
            });
    }
}

export const getStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
    })
}

export default profileReducer