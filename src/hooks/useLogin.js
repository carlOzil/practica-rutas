import React, { useReducer } from 'react'
import { LogReducer } from '../reducer/LogReducer'

export const useLogin = () => {

    const [state, dispatch] = useReducer(LogReducer, 'no-auth')

    const handleLogin = () => {
        dispatch({ type: 'login' });
    };

    const handleLogout = () => {
        dispatch({ type: 'logout' });
    };

    return {
        state,
        handleLogin,
        handleLogout
    };
};
