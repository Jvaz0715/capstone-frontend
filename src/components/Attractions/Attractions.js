import {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';


function Attractions() {
  const {
      state: {user}
   } = useContext(AuthContext);
   // console.log("state")
   // console.log(user)
   return (
      <div>
         {/* Welcome back {user.username} */}
         hello
      </div>
   )
}

export default Attractions
