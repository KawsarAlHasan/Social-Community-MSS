import React, { useEffect, useState } from "react";

const Users = () => {
  const [AllUser, setAllUser] = useState([]);
  useEffect(() => {
    const url = "https://enigmatic-ocean-28315.herokuapp.com/user";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, [AllUser]);
  return (
    <div>
      <h1>{AllUser.length}</h1>
    </div>
  );
};

export default Users;
