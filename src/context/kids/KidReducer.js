const kidReducer = (state , action) => {
switch(action.type){
    case 'GET_KIDS':
        return{
            ...state,
            kids: action.payload,
            isLoading: false
        }
    case 'SET_LOADING':

        return {
            ...state,
        isLoading: true
    }
    default:
        return state ;
}

}
export default kidReducer