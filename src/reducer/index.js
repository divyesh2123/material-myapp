import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import myuserReducer from "./myuserReducer";
import safauserReducer from "./safauserReducer";

const rootReducer = combineReducers({

    counter: counterReducer,
    user: userReducer,
    myuser: myuserReducer,
    myuserSaga: safauserReducer
});


export default  rootReducer;