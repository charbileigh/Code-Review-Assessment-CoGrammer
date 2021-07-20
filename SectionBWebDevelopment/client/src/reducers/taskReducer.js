import { GET_TASKS, CREATE_TASK, UPDATE_TASK, DELETE_TASK} from '../actions/types';

const initialState = [
    {
        id: 1,
        name: 'yama',
        description: 'squad 1',
        date: '2020-06-08'
    },
    {
        id: 2,
        name: 'yama',
        description: 'squad 1',
        date: '2020-06-08'
    },
    {
        id: 3,
        name: 'yama',
        description: 'squad 1',
        date: '2020-06-08'
    }    
];

export default function(state= initialState, action){
    switch(action.type){
        case GET_TASKS:
            return [...state];
        case CREATE_TASK:
            return [...state, action.payload];
        case UPDATE_TASK:
            return [...state];
        case DELETE_TASK:
            return [...state.filter(task => task.id !== action.payload)];
        default:
            return state;
    }
};
