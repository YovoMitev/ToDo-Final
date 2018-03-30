import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to='/' style={{textDecoration:'none'}} className='navbar-brand'>ToDo App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/' style={{textDecoration:'none'}} className='nav-link'>View DOTOs!</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/add' style={{textDecoration:'none'}} className='nav-link'>Add TODO!</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header
