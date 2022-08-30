import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://enigmatic-ocean-28315.herokuapp.com";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
        hell
      <h1>{users.length}</h1>
      <h2>hello</h2>
      <table>
        <td>
            <tr>hello</tr>
        </td>
      </table>
    </div>
  );
};

export default Users;
