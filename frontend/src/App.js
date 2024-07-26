import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Brands from './components/Brands';
import Error from './components/Error';
import Suggest from './components/Suggest';
import Predict from './components/Predict';
import Rent from './components/Rent';
const App = () => {


  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/brands" element={<Brands />}></Route>
          <Route path="/suggest" element={<Suggest />}></Route>
          <Route path="/predict" element={<Predict />}></Route>
          <Route path="/rent" element={<Rent />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;


