import {applyMiddleware, createStore} from 'redux';
import Reducer from './Reducer';
import { thunk } from 'redux-thunk';


export const store = createStore(Reducer, {},applyMiddleware(thunk));