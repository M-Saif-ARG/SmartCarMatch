import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/logout', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       credentials: 'include', // Include cookies for authentication
  //     });

  //     console.log('Logout Response:', response);

  //     if (response.ok) {
  //       window.alert('Logout Successful');
  //       navigate('/signup'); // Redirect to signup or login page after logout
  //     } else {
  //       console.error('Logout failed');
  //       const errorData = await response.json(); // If response has JSON error message
  //       console.error('Error Data:', errorData);
  //     }
  //   } catch (err) {
  //     console.error('Logout failed', err);
  //   }
  // };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/signup');
    }
  }, []);

  return (
    <>
      <div className="container-fluid main_menu">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <NavLink className="navbar-brand" to="/" activeClassName="active"> SmartCarMatch </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/home" activeClassName="active">HOME</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/brands" activeClassName="active">BRANDS</NavLink>
                  </li>
                  {localStorage.getItem('token') ? (
                    <>
                      <li className="nav-item">
                        <button className="nav-link btn btn-link" onClick={() => { localStorage.removeItem("token"); navigate("/signup")}} style={{ backgroundColor: 'red', color: 'white' }}>
                          LOGOUT
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/signup" activeClassName="active">LOGIN / SIGNUP</NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
