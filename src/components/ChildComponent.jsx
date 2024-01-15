import { useState } from "react";

const userData = [
  {
    name: "Omar",
    job: "Fullstack developer",
  },
  {
    name: "John",
    job: "Teacher",
  },
  {
    name: "Jack",
    job: "Engineer",
  },
];

const ChildComponent = () => {
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const filteredUsers = userData.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  return (
    <>
      <h1>Hello world!</h1>
      <input className="border-2" type="text" onChange={handleChange} />
      <ul>
        {users.map((user, index) => (
          <li key={`${user.name}${index}`}>
            The username is {user.name} and he is a {user.job}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ChildComponent;
