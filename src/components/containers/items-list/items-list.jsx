import React from 'react';
import { connect } from 'react-redux';
import { withComponentMethods, withContext } from '../../hoc';
import { ListItem } from '../list-item';
import './index.scss';


const renderListElements = (arr, {onAddToCart}, cart) => {
    return arr.map(el => {
        return <ListItem 
                    key={el.id} 
                    {...el}  
                    onAddToCart={onAddToCart}
                />
    });
}

const ItemsList = p => {
    return(
        <div className='items-list container card-deck'>
            {renderListElements(p.books, p.bss)}
        </div>
    );
};

const mapStateToProps = ({books}) => ({books})
const mapMethodsToProps = ({getBooks}) => ({getData: getBooks})

const Items = withContext(withComponentMethods(mapMethodsToProps)(ItemsList))

export default connect(mapStateToProps)(Items);