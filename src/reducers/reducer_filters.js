import {ADD_FILTER,REMOVE_FILTER} from '../actions/index';

export default function(state = [], action) {
    var x;

    switch (action.type) {
        //REMOVE WHEN DONE
        case ADD_FILTER:
            if(action.payload)
            console.log("New Filter Added!");
            if(action.payload === "") {
                console.log("No value, skipping filter")
                return state;
            }
            for(x in state) {
                if(state[x].valueOf() === action.payload.valueOf()) {
                    console.log("Filter pre-existing. Pass")
                    return state;
                }
            }
            console.log(state.concat(action.payload))
            //Proper way to deep copy. Create an entirely new state to return
            return state.concat(action.payload);

        case REMOVE_FILTER:
            console.log("Filter Removal started!");
            //If the filter exists, find and remove it
            for(x in state) {
                if(state[x].valueOf() === action.payload.valueOf()) {
                    console.log("Filter removed!!")
                    //Somehow this allows a deep copy? Shit i dunno
                    let newstate = [...state];
                    newstate.splice(state.indexOf(state[x]),1);
                    return newstate;
                }
            }


            return state
        default:
            return state;
    }
}