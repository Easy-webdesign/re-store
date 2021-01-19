import React from 'react';
import { ItemsList } from '../../components';
import './index.scss';

const HomePage = p => {
    return(
        <div className='home-page'>
            <ItemsList/>
        </div>
    );
};

export default HomePage;