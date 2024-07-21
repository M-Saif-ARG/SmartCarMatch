import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const URL = "http://localhost:5000/login";

const Login = ({ switchToSignUp }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if(response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                setUser({
                    email: '',
                    password: '',
                });
                window.alert("Login Successful");
                navigate("/home");
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="main">
                <h1>Enter  your login credentials</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        placeholder="Enter your email"
                        autoComplete="off"
                        onChange={handleInput}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={user.password}
                        autoComplete="off"
                        onChange={handleInput}
                        required
                    />

                    <div className="wrap">
                        <button type="submit"
                            className="btn-a">
                            Login
                        </button>
                    </div>
                </form>
                <p className='login-p'>Not registered ?
                    <a href="#" onClick={switchToSignUp}
                        style={{ textDecoration: 'none' }}>
                        Create an account
                    </a>
                </p>
            </div>
        </>
    );
};

export default Login;
