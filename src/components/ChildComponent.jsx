import { useContext } from "react";
import { UserContext } from "../containers/Home";

const ChildComponent = () => {
  const user = useContext(UserContext);
  return (
    <h1>
      The user name is {user.name} and he is {user.age} years old.
    </h1>
  );
};

export default ChildComponent;
