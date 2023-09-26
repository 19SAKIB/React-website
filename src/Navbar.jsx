import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './image/code.png'

const Navbar = () => {
    return (
        <>
            <div className="container-fluide bg_nav">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav class="navbar navbar-expand-lg navbar-light  ">
                            <div className='container-fluid'>
                                <NavLink className="navbar-brand " to='/'><img src={logo} className='logo' alt='logo' /></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto ">
                                        <li className="nav-item">
                                            <NavLink className="nav-link " to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/service" >Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;