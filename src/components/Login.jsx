// src/components/Login.js

import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const { dispatch } = useContext(AppContext);

    const handleLogin = () => {
        const user = { name: username };
        dispatch({ type: "SET_USER", payload: user });
    };

    return (
        <div>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
