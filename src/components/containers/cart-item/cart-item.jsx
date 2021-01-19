import React from 'react';
import { connect } from 'react-redux';
import './index.scss';

const CartItem = p => {
    const {title, count, price, id, idx, fn, cart} = p;
    return(
        <tr>
            <th scope="row">{idx}</th>
            <td>{title}</td>
            <td>
                <button className="btn btn-outline-primary btn-sm" onClick={() => fn.onDecrease(id, cart)}>-</button>
                <span className="length">{count}</span>
                <button className="btn btn-outline-primary btn-sm" onClick={() => fn.onIncrease(id, cart)}>+</button>
            </td>
            <td>${price}</td>
            <td>
                <button className="btn btn-outline-danger" onClick={() => fn.onDelete(id, cart)}>delete</button>
            </td>
        </tr>
    );
};

const mapStateToProps = ({books, cart}) => ({books, cart})

export default connect(mapStateToProps)(CartItem);