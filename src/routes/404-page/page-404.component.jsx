import React from 'react';
import './page-404.styles.scss';

const Page404 = () => {
    return (
        <div className="page-404">
            <h1>Oops! Page not found.</h1>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href="/" className="home-link">Go to Home Page</a>
            <div className="illustration"></div>
        </div>
    );
};

export default Page404;
