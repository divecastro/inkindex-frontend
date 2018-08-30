import {ADD_FILTER,REMOVE_FILTER} from '../actions/index';

export default function(state = [], action) {
    var x;

    switch (action.type) {
        //REMOVE WHEN DONE
        case ADD_FILTER:
            console.log("New Filter Added!");
            for(x in state) {
                if(state[x].valueOf() === action.payload.valueOf()) {
                    console.log("Filter pre-existing. Pass")
                    return state;
                }
            }
            state.push(action.payload)
            console.log(state)
            return state;

        case REMOVE_FILTER:
            console.log("Filter Removal started!");
            //If the filter exists, find and remove it
            for(x in state) {
                if(state[x].valueOf() === action.payload.valueOf()) {
                    console.log("Filter removed!!")
                    state.splice(state.indexOf(x),1);
                    return state;
                }
            }


            return state
        default:
            return state;
    }
}