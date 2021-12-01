import {
   createContext,
   useReducer
} from "react";

import {ACTIONS} from "./ACTIONS";

export const AuthContext = createContext({});

const initialState = {
   user: null,
};

function reducer(state, action) {
   switch(action.type) {
      case ACTIONS.LOGIN:
         return {
            user: {
               email: action.user.email,
               username: action.user.username,
               isAuth: true,
            }
         };
      case ACTIONS.LOGOUT:
         return {
            user: null,
         };
      default:
         return;
   };
};

function AuthContextWrapper({ children }) {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <AuthContext.Provider
         value={{state, dispatch}}
      >
         {children}
      </AuthContext.Provider>
   )
};

export default AuthContextWrapper;