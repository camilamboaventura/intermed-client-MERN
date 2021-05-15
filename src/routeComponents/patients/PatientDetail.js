import { useState, useEffect, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";


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
      user_pic:"",
      date_of_birth:"",
      gender:""


    
  });
  const [showModal, setShowModal] = useState(false);

  // Equivalente a usar o props.match.params.id
  const { id } = useParams();
  const history = useHistory();

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await api.get(`/users/${id}`);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchBeer();
  }, [id]);

  return (
    <div>
 

      <img
        className="card-img product-img mx-auto mt-2"
        src={state.user_pic}
        alt="user"
      />
      <div className="card-body">
        <h4 className="card-title">
          <small>{state.name}</small>
        </h4>

        <p className="card-text">
          {(state.social_security_number)}
        </p>

        

        <p className="mb-0">
          {state.gender}
        </p>

        
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

export default PatientDetails;