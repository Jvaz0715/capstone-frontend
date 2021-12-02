import { useState } from "react";

// Create custom hooks that will take the input and update user

function useChangeInputConfig(inputType) {
   const [value, setValue] = useState("");
   const [isError, setIsError] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");
   const [isDisabled, setIsDisabled] = useState(true);
   // changes while user types in input
   function onChange(e) {
      let value = e.target.value;
      setValue(value);

      checkInput(value);
   };

   function clearInput() {
      setValue("");
   };

   function checkInput(value) {
      // check that values are not empty
      if (value.length === 0) {
         setIsError(true);
         setErrorMessage(`${inputType} is required`);
         setIsDisabled(true);
      } else {
         setIsError(false);
         setErrorMessage(``);
         setIsDisabled(false);
      };
   };

   return [
      value,
      onChange,
      isError,
      errorMessage,
      isDisabled,
      clearInput,
   ]
};

export default useChangeInputConfig;