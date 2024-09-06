import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo__block">
            <img src="" alt="" />
            <h3 className='logo__text'>
                antools.
            </h3>
        </div>
        <nav className="nav__block">
            <ul className='navigation'>
                <li className="navigation__item">
                    Home
                </li>
                <li className="navigation__item">
                    Categories
                </li>
                <li className="navigation__item">
                    My Collections
                </li>
                <li className="navigation__item">
                    Blog
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;