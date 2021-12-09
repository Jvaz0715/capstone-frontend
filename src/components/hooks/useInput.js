import { useState } from "react";
import { 
   isEmpty,
   isAlpha,
   isAlphanumeric,
   isEmail,
   isStrongPassword, 
} from "validator";

/*
   create custom hooks to save code time and make cleaner... 
   we MUST have validators here for the inputs!
   for reference on validations, remember to look at movie
*/ 

function useChangeInputConfig(inputType) {
   const [value, setValue] = useState("");
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [isDisabled, setIsDisabled] = useState(true);// for button later on

   function onChange(e){
      let value = e.target.value;
      setValue(value);
      checkInput(e, value);
   };

   function clearInput() {
      setValue("");
   };

   // TODO: use validator to make other checks!
   function checkInput(e, value){
      if(isEmpty(value)){
         setIsError(true);
         setErrorMessage(`${inputType} is required`);
         setIsDisabled(true);
      } else if (e.target.name === "firstName" && !isAlpha(value)){
         setIsError(true);
         setErrorMessage(`Names should only have alpha characters`);
         setIsDisabled(true);
      } else if (e.target.name === "lastName" && !isAlpha(value)){
         setIsError(true);
         setErrorMessage(`Names should only have alpha characters`);
         setIsDisabled(true);
      } else if (e.target.name === "username" && !isAlphanumeric(value)){
         setIsError(true);
         setErrorMessage(`Usernames should be alphanumeric characters`);
         setIsDisabled(true);
      } else if(e.target.name === "email" && !isEmail(value)){
         setIsError(true);
         setErrorMessage(`Enter a valid email`);
         setIsDisabled(true);
      } else if(e.target.name === "password" && !isStrongPassword(value)){
         setIsError(true);
         setErrorMessage(`Enter a valid password`);
         setIsDisabled(true);
      } else {
         setIsError(false);
         setErrorMessage();
         setIsDisabled(false);
      };
   };

   return [
      value,
      onChange,
      isError,
      errorMessage,
      isDisabled,
      clearInput
   ];
};

export default useChangeInputConfig;