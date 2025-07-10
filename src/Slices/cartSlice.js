import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    cart: []
}

const cartSlice = createSlice({ 
    name: 'cart',
    initialState, 
    reducers: { 
        addToCart: (state, action) => { 
            const existingProduct = state.cart.find((item) => item.id === action.payload.id); 
            if (existingProduct) { 
                existingProduct.quantity += 1; 
            } else { 
                state.cart.push(action.payload)
            }
        }, 
        removeFromCart: (state, action) => { 
            state.cart = state.cart.filter(item => item.id !== action.payload) // pass the product id
        },
        increaseQuantity: (state, action) => { 
            const product = state.cart.find((item) => item.id === action.payload); // pass the product id
            product.quantity += 1;
        },
        decreaseQuantity: (state, action) => { 
            const product = state.cart.find((item) => item.id === action.payload); // pass the product id
            if (product.quantity !== +1) { 
                product.quantity -= 1;
            }
        }, 
        setCart: (state, action) => { 
            state.cart = action.payload;
        },  
    }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, setCart} = cartSlice.actions
export default cartSlice.reducer