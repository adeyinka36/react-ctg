import {ADD} from "./actionTypes";

const add = (item) =>{
    return {
        type: ADD,
        payload: item
    }
}

export default add;