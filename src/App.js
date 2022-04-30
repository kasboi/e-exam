import { useState } from "react";
import Login from "./Auth/Login";
import Profile from "./Student/Profile";
import React from "react";

import app from "./Firebase/Auth";
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import SimpleSidebar from "./SimpleSidebar";
import Quest from "./Quest";
import useToken from "./customHooks/useToken";

export const UserDetails = React.createContext()

const auth = getAuth();


function App() {

  const { token, setToken } = useToken()

  // const onChange = onAuthStateChanged(auth, (user) => {
  //   console.log('new auth');
  //   setUser(user.uid)
  // })
  if (!token){
    return (
      <UserDetails.Provider value={ {setToken} }>
        <Login />
      </UserDetails.Provider>
    )
  }
    return (
    <UserDetails.Provider value={ {setToken} }>
      {/* <Quest /> */}
        {/* <Login /> */}
        <SimpleSidebar />
        {/* <Profile /> */}
    </UserDetails.Provider>
  )
}

export default App;
