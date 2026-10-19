import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

import UserContext from "./utils/UserContext";

const AppLayout = () => {
  return (
    <UserContext.Provider value={{name: "new user", email:"newuser@example.com"}}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;
