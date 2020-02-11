import {FETCH_POSTS, NEW_POST, DELETE_POST,TOGGLE_COMPLETE} from "../actions/types";

const initialState = {
    items: [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        }
    ],
    item: {}
}

//Checking the necessary actions

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log('FETCH POST REDUCER')
            console.log(action.payload)
            // return state
            return {
                ...state,
                items: action.payload
            }

        case NEW_POST:
            console.log('THE DATA HAS BEEN RECEIVED AND IS BEING PROCESSED')
            console.log(action.payload)
            return {
                ...state,
                item: action.payload
            };
        case DELETE_POST:
            console.log('DELETE POST REDUCER')
            return {
                ...state,
                items:[...state.items.filter(item=>item.id!==action.payload)]
            };
        case TOGGLE_COMPLETE:
            console.log('TOGGLE_COMPLETE POST REDUCER')
            console.log(action.payload)
            return{
                ...state,
                items:[...state.items.slice(0,action.payload),{...state.items[action.payload],completed:!state.items[action.payload].completed},...state.items.slice(action.payload+1),]
            };
        default:
            return state;
    }
}
