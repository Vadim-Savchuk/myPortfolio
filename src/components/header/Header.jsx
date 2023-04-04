import { useEffect, useState } from 'react';
import { Link }                from "react-scroll";

import './Header.scss';

function Header() {
    const [active, setActive] = useState(false);
    const navLinks = ['Home', 'About me', 'Skills', 'Portfolio', 'Contacts']

    useEffect(() => {
        let body = document.querySelector('body')
        if (active) {
            body.classList.add('hiden')
        } else {
            body.classList.remove('hiden')
        }
    }, [active])

    return (
        <header className="header">
            {/* Logo */}
            <div className='logo'>Savchuk</div>

            {/* Nav */}
            <nav className={active ? "nav active" : 'nav'}>
                <ul className="nav__list">
                    
                    {/* Nav Links */}
                    {navLinks.map((navLink, index) => {
                        return (
                            <li className="nav__item" key={index}>
                                <Link
                                    to={navLink}
                                    className="nav__link"
                                    onClick={() => setActive(false)}
                                >{navLink}</Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>

            {/* Burger Menu */}
            <div className="burger-menu" onClick={() => setActive(!active)}>
                <p className={active ? 'active' : ''}><span></span></p>
            </div>
        </header>
    );
}

export default Header;
