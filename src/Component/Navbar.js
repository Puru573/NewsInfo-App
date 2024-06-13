import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid bg-dark fixed-top p-1">
                    <NavLink className="navbar-brand text-white" to="/">NewsMonkey</NavLink>
                    <button className="navbar-toggler bg-dark-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-1" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">                            
                        <li className="nav-item"><NavLink className="nav-link text-white" exact to="/" activeClassName="active">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-white" to="/business" activeClassName="active">Business</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-white" to="/entertainment" activeClassName="active">Entertainment</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-white" to="/general" activeClassName="active">General</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-white" to="/health" activeClassName="active">Health</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-white" to="/science" activeClassName="active">Science</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-white" to="/sports" activeClassName="active">Sports</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link text-white" to="/technology" activeClassName="active">Technology</NavLink></li>
                            

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
