import React from 'react';
import './skeleton.styles.scss'; // Assuming you have a Sass file for styling

const NavbarSkeleton: React.FC = () => {
    return (
        <nav className="skeleton-navbar">
            <div className="logo">
                <div className="skeleton-item skeleton-logo"></div>
            </div>
            <ul className="nav-links">
                <li>
                    <div className="skeleton-item skeleton-link"></div>
                </li>
                <li>
                    <div className="skeleton-item skeleton-link"></div>
                </li>
                <li>
                    <div className="skeleton-item skeleton-link"></div>
                </li>
                <li>
                    <div className="skeleton-item skeleton-link"></div>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarSkeleton;
