import { useState, useEffect } from "react";
import PatientCard from "./PatientCard";
import NavbarLogged from "../../components/NavBarLogged";
import api from "../../apis/api";
import "../../assets/styles/PatientFeed.css"
import background from "../../assets/images/doctorBG.jpg"

function PatientFeed() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      try {
        const response = await api.get("/patients");

        setPatients([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPatients();
  }, []);

  return (
    <div className="allPagePatients">
    <img src={background} className="backgroundPic" alt="background" />
      <div className="patientsFeed">
      <NavbarLogged />
      <div className="row">
        {patients.map((patient) => {
          return (
            <div key={patient._id} className="col-12 col-sm-4 col-md-3">
              <PatientCard patient={patient} />
            </div>
          );
          
        })}
        </div>
      </div>
    </div>
  );
}

export default PatientFeed;
