import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                SHUROQ
            </Link>

            <div className="nav-links">
                <a href="#roles">Programs</a>
                <a href="#about">About</a>

                <Link to="/apply" className="nav-apply">
                    Apply Now
                </Link>
            </div>

        </nav>
    );
}

export default Navbar;