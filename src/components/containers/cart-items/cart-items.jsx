import React from 'react';
import { CartItem } from '../cart-item';
import './index.scss';

const cartItem = (arr, fn) => {
    return arr.map((el, i) => {
        return <CartItem key={el.id} {...el} fn={fn} idx={i+1}/>
    })
}

const CartTable = p => {
    const {cartItems, total} = p.cart
    if(!cartItems.length) {
        return <div className='cart-items'>
                    <h1>Cart Page</h1>
                    <h5>Cart length: 0</h5>
                </div>
    }
    return(
        <div className='cart-items'>
            <h1>Cart Page</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Количество</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>
                   {cartItem(cartItems, p.bss)}

                </tbody>
            </table>

            <h5>Total price: ${total}</h5>
        </div>
    );
};

export default CartTable