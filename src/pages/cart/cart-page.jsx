import React from 'react';
import { CartItems } from '../../components';
import './index.scss';

const CartPage = p => {
    return(
        <div className='cart-page container'>
            <CartItems/>
        </div>
    );
};

export default CartPage;