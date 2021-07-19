import {CategoryActionTypes as ActionTypes} from '../types/ActionTypes';

const initialState = {
    categories: [],
    searchQuery: '',
};

export default function (state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}