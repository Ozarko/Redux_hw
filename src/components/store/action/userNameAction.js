import {SAVE_USER_NAME, REMOVE_USER_NAME} from './actionTypes'

export const addUserName = name => ({
    type: SAVE_USER_NAME,
    payload: name
});

export const removeUserName = () => ({
    type: REMOVE_USER_NAME,
    payload: '...'
});