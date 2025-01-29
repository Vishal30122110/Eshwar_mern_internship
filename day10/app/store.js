import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../slices/userslice";
const store=configureStore(
    {
        reducer:{
            userinfo:userReducer
        }
    }
)
export default store;