import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <div>
            <ul className='navbar'>
                <li>
                    <NavLink activeClassName='active' exact to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar ;