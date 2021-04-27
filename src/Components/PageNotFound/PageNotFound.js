import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <section className="py-5 mt-5 pr-5 padding-left-85">
            <h2 className="text-white">Sorry !!! This Page Is Not Found</h2>
            <Link className="btn btn-primary mt-4" to="/">Back to Home</Link>
        </section>
    );
};

export default PageNotFound;