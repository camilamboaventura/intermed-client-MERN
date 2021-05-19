import { useState, useEffect, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";
import NavbarLogged from "../../components/NavBarLogged";
import "./UsersCard.css";
import "../../assets/styles/PatientDetail.css";

function PatientDetails() {
  const [state, setState] = useState({
    address: {
      street: "",
      neighbourhood: "",
      city: "",
      postCode: "",
      stateOrProvince: "",
      country: "",
    },
    _id: "",
    name: "",
    email: "",
    social_security_number: 0,
    user_pic: "",
    date_of_birth: "",
    gender: "",
    records: [
      {
        allergy: [],
        chief_complaint: "",
        history_illness: "",
        medications: [],
        test_results: "",
        date_of_visit: "",
        created_by: "",
      },
    ],
  });
  const [showModal, setShowModal] = useState(false);

  // Equivalente a usar o props.match.params.id
  const { id } = useParams();
  const history = useHistory();

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchPatient() {
      try {
        const response = await api.get(`/patients/${id}`);
        console.log(response);
        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchPatient();
  }, [id]);

  return (
    <div className="allPage">
      <NavbarLogged />
      {loggedInUser.user.role === "DOCTOR" ? (
        <div className="row d-flex justify-content-end">
          <Link to={`/patients/record/${id}`} className="btn btn-warning mr-3">
            Create Record
          </Link>
        </div>
      ) : null}
      <div className="container">
        <div className="d-flex justify-content-start align-items-center box ">
          <div className="col  img-patient">
            <img
              className="profile-pic rounded-circle"
              src={state.user_pic}
              alt="user"
            />
          </div>
          <div>
            <h3>
              <strong>{state.name}</strong>
            </h3>
            <p className="mb-0">
              <strong>Patient ID:</strong>Patient ID: {state._id}
            </p>
            <p className="mb-0">
              <strong>Social Secutiry Number:</strong>{" "}
              {state.social_security_number}
            </p>
            <p className="mb-0">
              <strong>Gender:</strong> {state.gender}
            </p>
            <p className="mb-0">
              <strong>Date of Birthday: </strong>
              {new Date(state.date_of_birth).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="d-flex  align-items-center adressInfo mt-4">
          <div className="col addressPatient">
            <h3>Address Information</h3>
            <ul>
              <li>
                <strong>Post Code: </strong>
                {state.address.postCode}
              </li>

              <li>
                <strong>Street: </strong>
                {state.address.street}
              </li>
              <li>
                <strong>Neighbourhood: </strong>
                {state.address.neighbourhood}
              </li>
              <li>
                <strong>City: </strong>
                {state.address.city}
              </li>
              <li>
                <strong>State or Province: </strong>
                {state.address.stateOrProvince}
              </li>
              <li>
                <strong>Country: </strong>
                {state.address.country}
              </li>
            </ul>
          </div>
        </div>

        {state.records.map((record) => {
          if (record) {
            return (
              <div className="recordInfo mt-4">
                <div className="recordRows">
                  <h3>
                    Record Information -{" "}
                    {new Date(record.date_of_visit).toLocaleDateString()}
                  </h3>
                  <strong>Doctor: </strong>
                  {record.created_by.name} <br />
                  <strong>Doctor Specialty: </strong>
                  {record.created_by.medical_specialty}
                  <ul>
                    <li>
                      <strong>Chief Complaint: </strong>
                      {record.chief_complaint}
                    </li>
                    <li>
                      <strong>History Illness:: </strong>
                      {record.history_illness}
                    </li>

                    <li>
                      <strong>Allergy: </strong>
                      {record.allergy}
                    </li>

                    <li>
                      <strong>Medications: </strong>
                      {record.medications}
                    </li>

                    <li>
                      <strong>Test Results: </strong>
                      {record.test_results}
                    </li>
                  </ul>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default PatientDetails;
