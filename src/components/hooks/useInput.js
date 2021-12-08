import { useState } from "react";
// import { isEmpty } from "validator";

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
      checkInput(value);
   };

   function clearInput() {
      setValue("");
   };

   // TODO: use validator to make other checks!
   function checkInput(value){
      if(value.length === 0){
         setIsError(true);
         setErrorMessage(`${inputType} is required`);
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