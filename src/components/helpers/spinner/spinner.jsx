import React from 'react';
import './index.scss';

const Spinner = p => {
    return(
        <div className="container spinner">
            <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;