const del = (item) =>{
    return {
        type: 'DELETE',
        payload: item
    }
}

export default del;