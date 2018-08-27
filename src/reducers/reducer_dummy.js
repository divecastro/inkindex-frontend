import {DUMMY} from '../actions/index';

export default function(state = [], action) {

    switch (action.type) {
        //REMOVE WHEN DONE
        case DUMMY:
            console.log("Dummy emission received");
            //If empty payload then return current state
            if(action.payload === "") {
                return state;
            }
            //Else return the new dummy
            return action.payload;

        default:
            return state;
    }
}