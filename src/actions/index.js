import auth from "../api/auth";
import { SIGN_IN } from "./types";

export const userLogin = (formValues) => async dispatch => {
    const response = await auth.post('/login', formValues);

    window.localStorage.setItem('bearer_token', response.data.token);
    dispatch({ type: SIGN_IN, payload: response.data });
};