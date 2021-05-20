import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import api from "../../apis/api";
import NavbarLogged from "../../components/NavBarLogged";
import "../../assets/styles/AllPatients.css";

function MedicalFeed() {
  const [users, setUsers] = useState({ USER: [], DOCTOR: [], ADMIN: [] });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get("/users");
        const auxObj = { USER: [], DOCTOR: [], ADMIN: [] };
        response.data.map((user) => {
          if (user.role === "USER") {
            auxObj.USER.push(user);
          }
          if (user.role === "DOCTOR") {
            auxObj.DOCTOR.push(user);
          }
          if (user.role === "ADMIN") {
            auxObj.ADMIN.push(user);
          }
        });
        setUsers({ ...auxObj });
      } catch (err) {
        console.error(err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="allPatients">
      <NavbarLogged />
      <div className="container" style={{ minHeight: "85vh" }}>
        <h3 className="mt-5 mb-5">Our Medical Team:</h3>
        <div className="row">
          {users.DOCTOR.map((user) => {
            return (
              <div key={user._id} className="col-12 col-sm-4 col-md-3">
                <UserCard user={user} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MedicalFeed;
