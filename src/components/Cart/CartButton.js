import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';

const CartButton = (props) => {
  const cartQuantity=useSelector(state=>state.cart.totalQuantity)
  const uiDispatch=useDispatch()
    
  const onToggleCart=()=>{
   uiDispatch(uiAction.toggleCart()) 
  }

  return (
    <button className={classes.button} onClick={onToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
