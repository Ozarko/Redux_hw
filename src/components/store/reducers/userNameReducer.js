import { REMOVE_USER_NAME, SAVE_USER_NAME } from "../action/actionTypes";

const initialUserNameState = {
    userName: '...'
};

export const userNameReducer = (state = initialUserNameState, action) => {
    switch (action.type) {
        case SAVE_USER_NAME:
            return { userName: action.payload};
        case REMOVE_USER_NAME:
            return { userName: action.payload};
        default: return state;
    }
};