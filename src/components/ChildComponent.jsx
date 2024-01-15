import { useEffect, useState } from "react";

const ChildComponent = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getUsersData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.org/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      return "Something went wrong";
    }
  };

  const handleChange = async (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(users);
    const filteredUsers = users.filter((user) =>
      user.firstname.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <h1>Hello world!</h1>
      <input className="border-2" type="text" onChange={handleChange} />
      <ul>
        {filteredUsers.length === 0
          ? "No   match"
          : filteredUsers.map((user) => (
              <li key={user.id}>
                The username is {user.firstname} {user.lastname}
              </li>
            ))}
      </ul>
    </>
  );
};

export default ChildComponent;
