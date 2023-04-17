import {createSlice} from '@reduxjs/toolkit'


const uiSlice=createSlice({
    name:"ui",
    initialState:{showCart:false,showNotification:null},
    reducers:{
        toggleCart(state){
            state.showCart=!state.showCart
        },
        cartNotification(state,action){
            state.showNotification={
                status:action.payload.status,
                message:action.payload.message,
                title:action.payload.title
            }
        }
    }
})


export const uiAction=uiSlice.actions
export default uiSlice