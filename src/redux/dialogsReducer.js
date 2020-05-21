const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages,{
                    id: 1,
                    sender: 'me',
                    message: action.message
                }]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (message) => ({type: SEND_MESSAGE, message});

export default dialogReducer