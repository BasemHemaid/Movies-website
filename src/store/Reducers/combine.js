import { combineReducers } from 'redux';
import FavouriteReducer from './FavouriteReducer';
import languageReducer from "./language";
import LogoReducer from "./reducer";

export default combineReducers({
    language:languageReducer,
    logo:LogoReducer,
    Favourite:FavouriteReducer,
})