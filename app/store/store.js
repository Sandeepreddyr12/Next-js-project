"use client"

/* --todo

may be convert it into redux toolkit,
diiferent state after auth

*/

import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: { Items: [], shippingAddress: {}}
};
function reducer(state, action) {
  switch (action.type) {
    case 'BUYING_ITEM': {
      const newItem = action.payload;
      // const existItem = state.cart.Items.find(
      //   (item) => item.slug === newItem.slug
      // );
      // const Items = existItem
      //   ? state.cart.Items.map((item) =>
      //       item.name === existItem.name ? newItem : item
      //     )
      //   : [...state.cart.Items, newItem];
     
      return { ...state, cart: { ...state.cart, Items :[...state.cart.Items, newItem] } };
    }

    // state reset goona solve the problems for now

    // case 'CANCEL_ITEM': {
    //   const Items = state.cart.Items.filter(
    //     (item) => item.slug !== action.payload.slug
    //   );
    //   localStorage.setItem('cart', JSON.stringify({ ...state.cart, Items }));
    //   return { ...state, cart: { ...state.cart, Items } };
    // }

    // case 'CLEAR_ITEMS':
    //     return { ...state, cart: { ...state.cart, Items: [] } };

    

    case 'SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };

      case 'STATE_RESET':
      return {
        ...state,
        cart: {
          Items: [],
          shippingAddress: { },
          paymentMethod: '',
        },
      };
    default:
      return state;
  }
}

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
