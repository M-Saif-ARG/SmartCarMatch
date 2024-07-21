import React, { useEffect } from 'react';
import err from '../images/404.jpg';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/signup');
        }
    }, [navigate]);

    const handleGoBack = () => {
        if (localStorage.getItem('token')) {
            navigate('/home');
        } else {
            navigate('/signup');
        }
    };

    return (
        <>
            <div className="container-fluid main_header">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row">
                            <div className="col-md-12 col-12 main_header_left align-items-center">
                                <figure className="errimg">
                                    <img src={err} alt="404 Not Found" style={{ width: '50rem', height: '40rem' }} title="404 Not Found" />
                                </figure>
                                <button onClick={handleGoBack}>Go Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;
