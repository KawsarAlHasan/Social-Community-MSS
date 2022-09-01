import React, { useEffect, useState } from "react";
import "./User.css";
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
          <th>First Name</th>
          <th>Last Name</th>
          <th>User name/Email</th>
          <th>Followers</th>
          <th>Following</th>
          <th>joined</th>
          <th>Updated</th>
        </tr>
        {AllUser.map((user, index) => (
          <tr key={index}>
            <td>
              {user?.firstname}
            </td>
            <td> {user?.lastname}</td>
            <td>{user?.username}</td>
            <td>{user.followers.length}</td>
            <td>{user.following.length}</td>
            <td>{user.createdAt}</td>
            <td>{user.updatedAt}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Users;
