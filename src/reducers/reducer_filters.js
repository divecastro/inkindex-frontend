import {ADD_FILTER,REMOVE_FILTER} from '../actions/index';

export default function(state = ["LOL","WOW"], action) {
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
            console.log(state)
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
                    newstate.splice(state.indexOf(x),1);
                    return newstate;
                }
            }


            return state
        default:
            return state;
    }
}