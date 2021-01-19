import { mainActions as act} from '../../redux/actions';
import { connect } from 'react-redux';
import CartTable from '../containers/cart-items/cart-items';
import { withContext, withComponentMethods } from '../hoc';

const methods = ({getCart}) => ({getData: getCart})

const mapDispatchToProps = (dispatch, {bss}) => {
    return {itemsLoaded: act.cartLoaded}
}
const mapStateToProps = ({cart}) => ({cart});

const Items = withContext(withComponentMethods(methods)(CartTable));

export default connect(mapStateToProps, mapDispatchToProps)(Items);