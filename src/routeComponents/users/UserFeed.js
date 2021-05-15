import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import api from "../../apis/api";

function UserFeed() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get("/users");

        setUsers([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="row">
      {users.map((user) => {
        return (
          <div key={user._id} className="col-12 col-sm-4 col-md-3">
            <UserCard user={user} />
          </div>
        );
      })}
    </div>
  );
}

export default UserFeed;
