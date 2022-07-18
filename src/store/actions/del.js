import {DELETE} from "./actionTypes";

const del = (item) =>{
    return {
        type: DELETE,
        payload: item
    }
}

export default del;