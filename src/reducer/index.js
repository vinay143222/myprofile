import { combineReducers } from "redux";
import Auth from './Auth';
import Mail from './Mail';
export const Authreducer = combineReducers({ Auth, Mail });