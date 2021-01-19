import React from 'react';
import { connect } from 'react-redux';
import './index.scss';

const ListItem = p => {
    return(
        <div className="card mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters item-box">
                <div className="col-md-4 img-box">
                    <img src={p.img} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8 card-box">
                    <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.author}</p>
                        <h3 className="card-title">${p.price}</h3>
                        <button className="btn btn-primary"  onClick={() => p.onAddToCart(p.id, p.books, p.cart)}>To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({books, cart}) => ({books, cart})

export default connect(mapStateToProps)(ListItem);