import {types} from "../types";


const initialState = {
    users: "",
    user: ""
}

export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case types.GET_USER:
            return{...state, users: action.payload.users, user: action.payload.user}
        case types.EXODUS_USER:
            return{...state, users: "", user: ""}
        default: return state
    }
}