import React  from 'react';
import './Header.css';

const Header = props => (
    <div className = "header-wrapper">
        <header className = "header">
            { props.children }
        </header>
    </div>
)
export default Header;