export default function FavouriteReducer(state = [],action)
{
    switch(action.type){
        case 'ADD_MOVIES':
            return {...state , favourite:action.payload}
        case 'REMOVE_MOVIES':
            return {...state , favourite:action.payload}     
        default:
            return state;    
    }
}