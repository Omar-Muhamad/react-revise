import { createContext } from "react";
import ParentComponent from "../components/ParentComponent";

export const UserContext = createContext();

const Home = () => {
  return (
    <UserContext.Provider value={{name: 'Omar', age: 32}}>
      <ParentComponent />
    </UserContext.Provider>
  );
};

export default Home;
