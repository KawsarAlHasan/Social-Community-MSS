import React, { useEffect, useState } from "react";
import "./admin.css";
const Users = () => {
  const [AllUser, setAllUser] = useState([]);
  useEffect(() => {
    const uri = "https://enigmatic-ocean-28315.herokuapp.com/user";
    fetch(uri)
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, [AllUser]);

  const deleteUser = (id, username) => {
    const proceed = window.confirm(`Are you sure you want to delete ${username}?`);
    if (proceed) {
      console.log("deleting user with id", id);
      const url = `https://enigmatic-ocean-28315.herokuapp.com/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted", data.deletedCount);
            const remaining = AllUser.filter((item) => item._id !== id);
            setAllUser(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2>All Users</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Admin/user</th>
          <th>Make/delete Admin</th>
          <th>Delete</th>
        </tr>
        {AllUser.map((user, index) => (
          <tr key={index}>
            <td>
              {user?.firstname} {user?.lastname}
            </td>
            <td>{user?.username}</td>
            <td>{user?.isAdmin === true ? "Admin" : "User"}</td>
            <td>{user?.isAdmin === true ? "Delete Admin" : "Make Admin"}</td>
            <td>
              <button onClick={() => deleteUser(user._id, user.username)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Users;
