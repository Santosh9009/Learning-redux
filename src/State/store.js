import {applyMiddleware,  legacy_createStore as createStore} from 'redux';
import reducers from './Reducer';
import { thunk } from 'redux-thunk';


export const store = createStore(reducers, {}, applyMiddleware(thunk));