import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import login from '../images/login.png';
import signup from '../images/signup.png';

const SignUp = () => {
    const [activePage, setActivePage] = useState(1);

    const switchToSignUp = () => {
        setActivePage(2);
    };

    return (
        <>

            <div class="container-fluid main_header">
                <div class="row">
                    <div class="col-md-10 col-12 mx-auto">
                        <div class="row">
                            <div class="col-md-6 col-12 main_header_left">
                                <div className="column-sign">
                                    <div className="row-sign">
                                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                            <div className="column-signup">
                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={activePage === 1} onChange={() => setActivePage(1)} />
                                                <label className="btn btn-outline-primary" htmlFor="btnradio1" style={{ fontSize: '1.5rem' }}>Login</label>

                                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={activePage === 2} onChange={() => setActivePage(2)} />
                                                <label className="btn btn-outline-primary" htmlFor="btnradio2" style={{ fontSize: '1.5rem' }}>Sign Up</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row-sign">
                                    <div className="active-page">
                                        {activePage === 1 && <Login switchToSignUp={switchToSignUp} />}
                                        {activePage === 2 && <Register />}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 main_header_right">
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="w-100" src={login} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="w-100" src={signup} alt="Second slide" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;