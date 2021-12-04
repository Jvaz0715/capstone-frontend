import React from 'react';
import {
   makeStyles
} from "@material-ui/core/styles";
import {
   Grid,
   Button,
   TextField,
   CircularProgress,
   Snackbar
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import useChangeInputConfig from '../hooks/useInput';
import useFetchAPI from '../hooks/useFetchAPI';
import CheckAuthToken from '../hooks/checkIfUserAuth';

const useStyles = makeStyles((theme) => ({
   root: {
      "& > *": {
         margin: theme.spacing(1),
         width: "25ch",
      }
   }
}));

function Auth(props) {
   const classes = useStyles();

   let isLoginRoute = props.location.pathname === "/login";
   let submitButtonTitle = isLoginRoute ? "Login" : "Sign Up";
   let apiURL = isLoginRoute ? "/users/login" : "/users/sign-up";

   const {checkIfTokenExists} = CheckAuthToken;

   const [
      {
         isLoading,
         response,
         error,
         setResponse
      },
      successMessageValue,
      isMessageOpen,
      handleAPICallButtonSubmit,
      ,
      handleMessageClose
   ] = useFetchAPI(apiURL);

   // Firstname hooks
   const [
      firstName,
      handleFirstNameChange,
      isFirstNameError,
      firstNameErrorMessage,
      isFirstNameDisabled,
      clearFirstNameInput
   ] = useChangeInputConfig("firstName");

   // Lastname hooks
   const [
      lastName,
      handleLastNameChange,
      isLastNameError,
      lastNameErrorMessage,
      isLastNameDisabled,
      clearLastNameInput
   ] = useChangeInputConfig("lastName");

   // username hooks
   const [
      username,
      handleUsernameChange,
      isUsernameError,
      usernameErrorMessage,
      isUsernameDisabled,
      clearUsernameInput
   ] = useChangeInputConfig("username");

   // email hooks
   const [
      email,
      handleEmailChange,
      isEmailError,
      emailErrorMessage,
      isEmailDisabled,
      clearEmailInput
   ] = useChangeInputConfig("email");

   // password hooks
   const [
      password,
      handlePasswordChange,
      isPasswordError,
      passwordErrorMessage,
      isPasswordDisabled,
      clearPasswordInput
   ] = useChangeInputConfig("password");

   // confirmpassword hooks
   const [
      confirmPassword,
      handleConfirmPasswordChange,
      isConfirmPasswordError,
      confirmPasswordErrorMessage,
      isConfirmPasswordDisabled,
      clearConfirmPasswordInput
   ] = useChangeInputConfig("confirmPassword");


   function handleOnSubmit(e) {
      e.preventDefault();

      const user = isLoginRoute
         ? {email, password}
         : {firstName, lastName, username, email, password};
      
      handleAPICallButtonSubmit({...user})
   
      console.log(user)
   };

   function successMessage() {

   };

   function errorMessage() {

   };


   return (
      <Grid container spacing={0} justifyContent="center">
         {successMessageValue && successMessage()}
         {error && errorMessage()}

         <form
            className={classes.root}
            onSubmit={handleOnSubmit}
         >
            {/* the top half is only for sign up so make dynamic */}
            {
               !isLoginRoute && (
                  <>
                  {/* FirstName input field */}
                  <Grid item m ={6}>
                     <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        error={isFirstNameError}
                        helperText={firstNameErrorMessage}
                     />
                  </Grid>

                  {/* LastName input field */}
                  <Grid item m ={6}>
                     <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                        error={isLastNameError}
                        helperText={lastNameErrorMessage}
                     />
                  </Grid>

                  {/* username input field */}
                  <Grid item m ={6}>
                     <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        error={isUsernameError}
                        helperText={usernameErrorMessage}
                     />
                  </Grid>
                  </>
               )
            }

            {/* will present on both login and signup! */}
            {/* email input field */}
            <Grid item m ={6}>
               <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={isEmailError}
                  helperText={emailErrorMessage}
               />
            </Grid>

            {/* password input field */}
            <Grid item m ={6}>
               <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={isPasswordError}
                  helperText={passwordErrorMessage}
               />
            </Grid>

            {/* confirmpassword only for sign up */}
            {
               !isLoginRoute && (
                  <>
                  <Grid item m ={6}>
                     <TextField
                        fullWidth
                        label="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        error={isConfirmPasswordError}
                        helperText={confirmPasswordErrorMessage}
                     />
                  </Grid>
                  </>
               )
            }

            <Grid style={{textAlign: "center"}}>
               <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{marginTop: 10}}
                  disabled={
                     isLoginRoute
                        ? isEmailDisabled || 
                           isPasswordDisabled
                        : isFirstNameDisabled ||
                           isLastNameDisabled ||
                           isUsernameDisabled ||
                           isEmailDisabled || 
                           isPasswordDisabled ||
                           isConfirmPasswordDisabled
                  }
               >
                  {submitButtonTitle}
               </Button>
            </Grid>
         </form>
      </Grid>
   )
};

export default Auth;
