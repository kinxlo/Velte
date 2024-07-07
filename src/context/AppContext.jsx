/* eslint-disable react/prop-types */
// src/context/AppContext.js

import { createContext, useReducer } from "react";

// Initial state
const initialState = {
    user: null,
    isAuthenticated: false,
    // Add other state properties as needed
};

// Create context
const AppContext = createContext(initialState);

// Reducer
const appReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        // Add other cases as needed
        default:
            return state;
    }
};

// Provider component
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
