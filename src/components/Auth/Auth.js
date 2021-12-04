import React from 'react'

function Auth(props) {
   let isLoginRoute = props.location.pathname === "/login";
   return (
      <div>
         {
            isLoginRoute
               ? "LOGIN Page"
               : "SIGNUP Page"
         }
      </div>
   )
}

export default Auth;
