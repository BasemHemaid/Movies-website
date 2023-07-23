const InitialState = {
    logo:'https://cdn4.vectorstock.com/i/1000x1000/37/83/heart-icon-love-icon-vector-23683783.jpg'
}

export default function LogoReducer(state=InitialState,action)
{ 
    switch(action.type)
    {
        case 'SET_LOGO':
            return {...state,logo:action.payload};

        default:
            return state    
    }

}