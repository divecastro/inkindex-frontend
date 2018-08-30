//Defines types of broadcast signals
//TODO Tie all to functionality. ONLY AS REQUIRED. Dont muddy code just to finish functions
//before they are useful lmao. Also remove everything to do with dummy when happy
export const DUMMY = "DUMMY";
export const SET_SEARCHTERM = "SETNAME";
export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const SET_LOCATION = "SET_LOCATION";
export const SET_RADIUS = "SET_RADIUS";
export const RESET_FILTERS = "RESET_FILTERS";
export const UPDATE_RESULTS ="UPDATE_RESULTS";
/*
* TODO REMOVE
*/
export function DummyAction(e=null) {
    console.log(`Dummy emitted: ${e}`)
    return {
        type: DUMMY,
        payload: e
    }
}

export function updateResults(e=null) {
    console.log(`Results added:`)
    console.log(e)
    return {
        type: UPDATE_RESULTS,
        payload: e
    }
}

export function addFilter(e=null) {
    console.log(`Filter add emitted: ${e}`)
    return {
        type: ADD_FILTER,
        payload: e
    }
}

export function removeFilter(e=null) {
    console.log(`Filter remove emitted: ${e}`)
    return {
        type: REMOVE_FILTER,
        payload: e
    }
}


