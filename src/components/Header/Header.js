import React from "react";
import "./Header.css";
import "animate.css";
import { Link } from "react-scroll";

const Header = () => {
    const [showBars, setShowBars] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(true);

    React.useEffect(() => {
        if (window.innerWidth < 900) {
            setShowMenu(false);
            setShowBars(true);
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth < 900) {
                setShowBars(true);
                setShowMenu(false);
            } else {
                setShowBars(false);
                setShowMenu(true);
            }
        });

        return () => window.removeEventListener("resize", () => {});
    }, []);

    const toggle = (e) => {
        setShowMenu((prev) => !prev);
    };
    return (
        <div className='header'>
            {showBars === true && (
                <div className='bars' onClick={toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
            <div className='header-logo animate__animated animate__backInUp'>
                <h2>Lii</h2>
                <p>Developer</p>
            </div>
            <nav>
                {showMenu && (
                    <ul className='ul'>
                        <li className='li animate__animated animate__fadeInDown animate__delay-1s'>
                            <Link to='Home' spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                        <li className='li animate__animated animate__fadeInDown animate__delay-1s'>
                            <Link to='About' spy={true} smooth={true}>
                                About
                            </Link>
                        </li>
                        <li className='li animate__animated animate__fadeInDown animate__delay-1s'>
                            <Link to='Pricing' spy={true} smooth={true}>
                                Pricing
                            </Link>
                        </li>
                        <li className='li animate__animated animate__fadeInDown animate__delay-1s'>
                            <Link to='Service' spy={true} smooth={true}>
                                Service
                            </Link>
                        </li>
                        <li className='li animate__animated animate__fadeInDown animate__delay-1s'>
                            <Link to='Contact' spy={true} smooth={true}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default Header;
