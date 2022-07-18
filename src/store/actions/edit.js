import {EDIT} from "./actionTypes";

const edit = (item) =>{
    return {
        type: EDIT,
        payload: item
    }
}

export default edit;