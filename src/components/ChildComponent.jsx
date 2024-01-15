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

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      const filteredUsers = users.filter((user) =>
        user.firstname.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUsers(filteredUsers);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <>
      <h1>fetch and search users using useState and useEffect</h1>
      <input className="border-2" type="text" onKeyDown={handleSearch} />
      <ul>
        {filteredUsers.length === 0
          ? "No match"
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
