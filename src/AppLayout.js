import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

import UserContext from "./utils/UserContext";

import { useState, useEffect } from "react";

const AppLayout = () => {

  const [user, setUser] = useState({
    name: "Osman",
    id: 43
  });

  // console.log(user)

  const random = Math.random() > 0.4; 

  useEffect(()=>{

    if(random){
      setUser({name: "Mohammed Osman",
        id: 21
      })
    }
    else{
      const loggedInUser = {
        name: "Mohammed Osman Ahmed Qureshi",
        id: 50
      }
      setUser(loggedInUser)
    } 
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;
