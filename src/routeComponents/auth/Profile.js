import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import NavbarLogged from "../../components/NavBarLogged";
import "../../assets/styles/Profile.css";

import api from "../../apis/api";

function Profile() {
  const [state, setState] = useState({
    address: {
      street: "",
      neighbourhood: "",
      city: "",
      postCode: "",
      stateOrProvince: "",
      country: "",
    },
    name: "",
    email: "",
    date_of_birth: "",
    gender: "",
    user_pic: "",
    social_security_number: 0,
    _id: "",
    medicalConsultation: [],
  });

  const { id } = useParams();
  // O useEffect é um Hook que executa a sua callback (primeiro parâmetro) toda vez que qualquer coisa na sua array de dependências (segundo parâmetro) sofre qualquer tipo de alteração. Caso a array de dependências esteja vazia, o useEffect roda a callback uma vez assim que o componente renderiza na tela (mesmo efeito do componentDidMount)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/profile/${id}`);

        console.log(response.data);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="allSection">
      <NavbarLogged />
      <div className="d-flex container mt-5">
        <div className=" container">
          <div className="d-flex row justify-content-start align-items-center rounded ">
            <div className="col  img-profile">
              <img
                className="card-img product-img mx-auto rounded-circle mt-2"
                src={state.user_pic}
                alt="user"
              />
            </div>
            <div className="col">
              <div className="card-body ">
                <h4 className="card-title">
                  <h3>Welcome, {state.name}!</h3>
                </h4>

                <p className="mb-0">
                  <strong>ID:</strong> {state._id}
                </p>

                <p className="card-text mb-0">
                  <strong>Social Security Number:</strong>{" "}
                  {state.social_security_number}
                </p>
                <p className="mb-0">
                  <strong>Gender:</strong> {state.gender}
                </p>

                <p>
                  <strong>Date of Birth: </strong>
                  {new Date(state.date_of_birth).toLocaleDateString()}
                </p>
              </div>
              <div className="adressProfile">
                <h5>
                  <strong>Address Information</strong>
                </h5>
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
          </div>
          <div className="d-flex col mt-5 m-3">
            {state.medicalConsultation.map((appointment) => {
              return (
                <div
                  className=" card text-white bg-light mb-3"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Upcoming Appointments</h5>
                    <div>
                      <p className="card-text">
                        <strong>Date: </strong>{" "}
                        {new Date(appointment.date_of_appointment).toLocaleDateString()}
                      </p>
                      <p className="card-text">
                        <strong>Time: </strong>
                        {appointment.time_of_appointment}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
