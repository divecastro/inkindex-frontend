import {UPDATE_RESULTS} from '../actions/index';

export default function(state = [], action) {

    switch (action.type) {
        //REMOVE WHEN DONE
        case UPDATE_RESULTS:
            console.log("New Resultset received - Fresh load or city changed");
            return action.payload;

        default:
            return state;
    }
}