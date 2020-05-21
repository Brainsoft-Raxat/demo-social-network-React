import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {title: 'How to get Ielts Band 8.0?', author: 'Rakhat K.', likes: 85},
                {title: 'How to get into US college?', author: 'Dias U..', likes: 85},
                {title: 'How to How to?', author: 'Zharken U.', likes: 85}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Sherxan'},
                {id: 2, name: 'Dias'},
                {id: 3, name: 'Zharken'},
                {id: 4, name: 'Islambek'},
                {id: 5, name: 'Alisher'}
            ],
            messages: [
                {id: 1, sender: 'me', message: 'Hi!'},
                {id: 2, sender: 're', message: 'Privet!'},
                {id: 3, sender: 'me', message: 'Perdet'},
                {id: 4, sender: 're', message: 'How are you?'}
            ],
            newMessageText: ""
        },
        nav: {
            friends: [
                {
                    name: 'Sherxan ',
                    imageSrc: 'https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
                },
                {
                    name: 'Dias',
                    imageSrc: 'https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
                },
                {
                    name: 'Zharken',
                    imageSrc: 'https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    renderEntirePage() {
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
        this.renderEntirePage(this._state);
        },

    subscribe(observer) {
        this.renderEntirePage = observer;
    }
}


/*
let state = {
    profilePage: {
        posts: [
            {title: 'How to get Ielts Band 8.0?', author: 'Rakhat K.', likes: 85},
            {title: 'How to get into US college?', author: 'Dias U..', likes: 85},
            {title: 'How to How to?', author: 'Zharken U.', likes: 85}
        ],
        newPostText: ''
    },

    messagesPage: {
        dialogs: [
            {id: 1, name: 'Sherxan'},
            {id: 2, name: 'Dias'},
            {id: 3, name: 'Zharken'},
            {id: 4, name: 'Islambek'},
            {id: 5, name: 'Alisher'}
        ],
        messages: [
            {id: 1, sender: 'me', message: 'Hi!'},
            {id: 2, sender: 're', message: 'Privet!'},
            {id: 3, sender: 'me', message: 'Perdet'},
            {id: 4, sender: 're', message: 'How are you?'}
        ]
    },

    nav: {
        friends: [
            {
                name: 'Sherxan ',
                imageSrc: 'https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
            },
            {
                name: 'Dias',
                imageSrc: 'https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
            },
            {
                name: 'Zharken',
                imageSrc: 'https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg'
            }
        ]
    }

}

export const addPost = (NewPostText) => {
    let post = {
        title: NewPostText,
        author: 'Rakhat K',
        likes: 15
    }
    state.profilePage.posts.push(post);
    updateNewPostText('');
    renderEntirePage(state);
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    renderEntirePage(state);
}

export const subscribe = (observer) => {
    renderEntirePage = observer;
}
*/
window.store = store;
export default store