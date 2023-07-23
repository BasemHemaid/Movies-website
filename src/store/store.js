import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import combine from './Reducers/combine';

const store = createStore(combine,composeWithDevTools())

export default store;