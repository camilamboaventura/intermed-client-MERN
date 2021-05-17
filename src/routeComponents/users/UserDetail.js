import { useState, useEffect, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";
import ConfirmationModal from "../../components/ConfirmationModal";

function UserDetail() {
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
    role: "",
  });
  const [showModal, setShowModal] = useState(false);

  // Equivalente a usar o props.match.params.id
  const { id } = useParams();
  const history = useHistory();

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get(`/users/${id}`);

        setState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, [id]);

  return (
    <div>
      {loggedInUser.user.role === "ADMIN" ? (
        <div className="row d-flex justify-content-end">
          <Link to={`/users/edit/${id}`} className="btn btn-warning mr-3">
            Edit
          </Link>
          {/* Abrimos um modal de confirmação antes de deletar o produto */}
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>
            Delete
          </button>
        </div>
      ) : null}

    

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

        <p className="mb-0">{state.role}</p>
        <p className="mb-0">{state.medical_specialty}</p>

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
      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={() => history.push(`/users/delete/${id}`)}
        title="Are you sure you want to delete this product?"
      >
        <p>This action is irreversible. To confirm, click "Confirm".</p>
      </ConfirmationModal>
    </div>
  );
}

export default UserDetail;
