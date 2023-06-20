import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import myuserReducer from "./myuserReducer";

const rootReducer = combineReducers({

    counter: counterReducer,
    user: userReducer,
    myuser: myuserReducer
});


export default  rootReducer;