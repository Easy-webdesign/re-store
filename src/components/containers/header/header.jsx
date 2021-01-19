import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Header = p => {
    return(
        <nav className="header navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to='/' exact className="navbar-brand">Re-Store</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/' exact className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/cart' className="nav-link">Cart | ${p.cart.total}</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = ({cart}) => ({cart}) 

export default connect(mapStateToProps)(Header)