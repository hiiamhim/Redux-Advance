import { uiAction } from "./ui-slice";
import { cartAction } from "./cart-slice";

//thunk
export const fetchCart=()=>{
    return async(dispatch)=>{
   const getCart=async()=>{
    const res=await fetch("https://custom-react-434f4-default-rtdb.firebaseio.com/cart.json")
    const data =await res.json()
    return data
   }
    
    try{
        const data=await getCart()
        dispatch(cartAction.replaceCart(
        {
            items:data.items || [],
            totalQuantity:data.totalQuantity
        }
        ))
    }
    catch(err){
        dispatch(uiAction.cartNotification({
            status:"error",
            title:"Failed",
            message:"Submitting cart data failed"
        
           }))

    }
}
}

export const putCartData= (cart)=>{
    return async (dispatch)=>{
        dispatch(uiAction.cartNotification({
            status:"Penidng",
            title:"sending",
            message:"Sending cart data"
        
           }))

      const sendata=async()=>{

            const response= await fetch("https://custom-react-434f4-default-rtdb.firebaseio.com/cart.json",{
      method:"PUT",
      body:JSON.stringify(cart)
    })

  
   
       
    if(!response.ok){
      throw new Error('Something went wrong')
    }
    
    

}
          try{
            await sendata()
            dispatch(uiAction.cartNotification({
                status:"success",
                title:"Submitted",
                message:"Submitting cart data passed"
            
               }))

          }
          catch(error){
           
                dispatch(uiAction.cartNotification({
                  status:"error",
                  title:"Failed",
                  message:"Submitting cart data failed"
              
                 }))
              
          }

       
 }
}