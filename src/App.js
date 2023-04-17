import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCart, putCartData } from './store/cart-actions';
let isFirstTime=true;

function App() {
  const isCart=useSelector(state=>state.ui.showCart)
  const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  const notification=useSelector(state=>state.ui.showNotification)


  useEffect(()=>{
    if(isFirstTime){
     isFirstTime=false;
     return 
    }

    if(cart.changed){
      dispatch(putCartData(cart))
    }
  
      
   },[cart,dispatch])

  useEffect(()=>{  
    dispatch(fetchCart())

  },[dispatch])
 

  
  return (
    <Fragment>
      {notification && <Notification title={notification.title} status={notification.status} message={notification.message}/>}
    <Layout>
     { isCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
