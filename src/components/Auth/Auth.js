import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
   Grid,
   Button,
   TextField,
   CircularProgress,
   Snackbar
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import useChangeInputConfig from "../hooks/useInput";


const useStyles = makeStyles((theme) =>({
   root: {
      "& > *": {
         margin: theme.spacing(1),
         width: "25ch",
      }
   }
}));

function Auth(props) {
   const classes = useStyles();
   
   let isLoginPath = props.location.pathname === "/login";

   let submitButtonTitle = isLoginPath 
      ? "Login"
      : "Sign Up";

   // first name
   const [
      firstName,
      handleFirstNameChange,
      isFirstNameError,
      firstNameDisabled,
      clearFirstNameInput
   ] = useChangeInputConfig("firstName");

   // last name
   const [
      lastName,
      handleLastNameChange,
      isLastNameError,
      lastNameDisabled,
      clearLastNameInput
   ] = useChangeInputConfig("lastName");

   // username
   const [
      username,
      handleUsernameChange,
      isUsernameError,
      usernameDisabled,
      clearUsernameInput
   ] = useChangeInputConfig("username");

   // email
   const [
      email,
      handleEmailChange,
      isEmailError,
      emailDisabled,
      clearEmailInput
   ] = useChangeInputConfig("email");

   // password
   const [
      password,
      handlePasswordChange,
      isPasswordError,
      passwordDisabled,
      clearPasswordInput
   ] = useChangeInputConfig("password");

   let user = {
      firstName,
      lastName,
      username,
      email,
      password
   };

   console.log("user")
   console.log(user)


   return (
      <Grid
         container
         spacing={0}
         justifyContent="center"
      >
         {/* {successMessageValue && successMessage()} */}
         {/* {error && errorMessage()} */}
         <form
            className={classes.root}
            // onSubmit={handleOnSubmit}
         >
            {/* put all the signup stuff inside this ternary */}
            {
               !isLoginPath && (
                  <>
                  <Grid item m={6}>
                  <TextField 
                     fullWidth
                     label="First Name"
                     name="firstName"
                     value={firstName}
                     onChange={handleFirstNameChange}
                     error={isFirstNameError}
                     // helperText={firstNameErrorMessage}
                  />
                  </Grid>

                  <Grid item m={6}>
                  <TextField 
                     fullWidth
                     label="Last Name"
                     name="lastName"
                     value={lastName}
                     onChange={handleLastNameChange}
                     error={isLastNameError}
                     // helperText={lastNameErrorMessage}
                  />
                  </Grid>

                  <Grid item m={6}>
                     <TextField 
                        fullWidth 
                        label="Username" 
                        name="username" 
                        value={username}
                        onChange={handleUsernameChange}
                        error={isUsernameError}
                        // helperText={usernameErrorMessage}
                     />
                  </Grid>
                  </>

               )
            }

            <Grid item m={6}>
               <TextField 
                  fullWidth
                  label="Email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={isEmailError}
                  // helperText={emailErrorMessage}
               />
            </Grid>

            <Grid item m={6}>
               <TextField 
                  fullWidth
                  label="Password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={isPasswordError}
                  // helperText={passwordErrorMessage}
               />
            </Grid>

            <Grid style={{textAlign: "center"}}>
               <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  style={{marginTop: 10}}
                  // disabled={
                  //    isLoginRoute 
                  //       ? isEmailDisabled || isPasswordDisabled
                  //       : isEmailDisabled || isPasswordDisabled || isUsernameDisabled
                  // }
               >
                  {submitButtonTitle}
               </Button>
            </Grid>
         </form>
      </Grid>
   )
};


export default Auth;