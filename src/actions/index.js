import auth from "../api/auth";
import { SIGN_IN } from "./types";

export const userLogin = (formValues) => async dispatch => {
    const response = await auth.post('/login', formValues);

    // I'm aware that storing tokens within the local storage is a bad security practice. However, I used it to save time.
    window.localStorage.setItem('bearer_token', response.data.token);
    dispatch({ type: SIGN_IN, payload: response.data });
};