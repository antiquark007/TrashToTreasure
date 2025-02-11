import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NavItem {
    title: string;
    link: string;
    dropdownItems?: { title: string; link: string }[];
}

interface NavbarProps {
    brandName: string;
    items: NavItem[];
}

const NavBar: React.FC<NavbarProps> = ({ brandName, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
            <div className="container">
                <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
                    <img
                        src="/api/placeholder/30/30"
                        alt="Logo"
                        className="d-inline-block align-text-top me-2"
                    />
                    {brandName}
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNav}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {items.map((item, index) => (
                            <li key={index} className={`nav-item ${item.dropdownItems ? 'dropdown' : ''}`}>
                                {item.dropdownItems ? (
                                    <>
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href={item.link}
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {item.title}
                                        </a>
                                        <ul className="dropdown-menu">
                                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                <li key={dropdownIndex}>
                                                    <a className="dropdown-item" href={dropdownItem.link}>
                                                        {dropdownItem.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <a
                                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                                        href={item.link}
                                    >
                                        {item.title}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>

                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;