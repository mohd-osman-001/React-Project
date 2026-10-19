import { createContext } from "react";

const UserContext = createContext({
  name: "hamza",
  email: "default@example.com",
});

export default UserContext;
