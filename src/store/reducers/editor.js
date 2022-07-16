const editorReducer = (state = []
    , action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "EDIT":
            let filtered = state.filter(item => item.id !== action.payload.id);
            return [...filtered, action.payload];
        case "DELETE":
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}
export default editorReducer;