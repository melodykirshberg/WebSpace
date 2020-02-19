import React, { createContext, useReducer, useContext } from "react";

// creating new storecontext to allow share 
const StoreContext = createContext();

// providers allows consuming components to subscribe to context changes
const { Provider } = StoreContext;

// loadings
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user, loading: false };
    case "LOADED":
      return { ...state, loading: false };
    default:
      return state;
  }
};

// setting inital state
const initialState = { user: null, loading: true };

const StoreProvider = ({ value = 0, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
