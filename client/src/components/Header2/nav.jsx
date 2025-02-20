import { Link } from 'react-router-dom';
import logo from './assets/logo.jpg';
import  './navbar.css'
import ContactPage from '../Pages/Contact/contact';

function Nav() {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="heading">
                    <h1>Trash To Treasure</h1>
                </div>
                <ul className="nav-links">
                    <li><button>Home</button></li>
                    <li><button>Services</button></li>
                    <li><button>Products</button></li>
                    <li><button>Shopping Cart</button></li>
                    <li><button>Testimonials</button></li>
                    <li><Link to="/contact"><button>Contacts</button></Link></li>
                    {/* <li><button>Log In</button></li>
                    <li><button className="sign-up">Sign Up</button></li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
