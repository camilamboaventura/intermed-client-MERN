import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import NavbarLogged from "../../components/NavBarLogged"

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
    <div>
    <NavbarLogged/>
      <img
        className="card-img product-img mx-auto mt-2"
        src={state.user_pic}
        alt="user"
      />
      <div className="card-body">
        <h4 className="card-title">
          <small>{state.name}</small>
        </h4>

        <p className="card-text">{state.social_security_number}</p>

        <p className="mb-0">{state.gender}</p>

        <p>
          <small>
            Date of Birthday: {new Date(state.date_of_birth).toLocaleString()}
          </small>
        </p>

        <h2>Address Info</h2>
        <hr />

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
  );
}

export default Profile;
