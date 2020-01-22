import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/edit/:id" className="nav-link">Edit Exercise</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create/" className="nav-link">Create Exercise</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/createuser/" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
    
};

export default Navbar;