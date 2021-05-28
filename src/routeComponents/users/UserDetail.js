import { useState, useEffect, useContext } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import "../../assets/styles/UserDetail.css";
import api from "../../apis/api";
import { AuthContext } from "../../contexts/authContext";
import ConfirmationModal from "../../components/ConfirmationModal";
import NavbarLogged from "../../components/NavBarLogged";
import "../../assets/styles/AllPatients.css";

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
    <div className="vh-100">
      <div className="allPage" >
      <NavbarLogged />
      <div className="container" style={{ minHeight: "85vh" }}>
        {loggedInUser.user.role === "ADMIN" ? (
          <div className="row d-flex justify-content-end buttonConfig">
            <div className="">
              <Link
                to={`/users/edit/${id}`}
                className="btn btn-outline-success "
              >
                Edit
              </Link>
            </div>
            {/* Abrimos um modal de confirmação antes de deletar o produto */}
            <button
              className="btn btn-outline-danger buttonDelete"
              onClick={() => setShowModal(true)}
            >
              Delete
            </button>
          </div>
        ) : null}
        <div className="profile-box mt-3">
          <div className=" row d-flex justify-content-between align-items-center ">
            <div className="col img-profile">
              <img
                className="card-img  mx-auto mt-2  photo rounded-circle"
                src={state.user_pic}
                alt="user"
              />
            </div>
            <div className="col userInfo">
              <div className="card-body">
                <h3 className="card-title">
                  <strong>{state.name}</strong>
                </h3>

                <p className="card-text mb-0">
                  <strong>Social Security Number: </strong>
                  {state.social_security_number}
                </p>

                <p className="mb-0">
                  <strong>Gender:</strong> {state.gender}
                </p>

                {state.role === "DOCTOR" ? (
                  <p className="mb-0">
                    <strong>Medical Specialty:</strong>{" "}
                    {state.medical_specialty}
                  </p>
                ) : null}

                <p>
                  <strong>Date of Birthday: </strong>
                  {new Date(state.date_of_birth).toLocaleDateString()}
                </p>
              </div>

              <div className="addressPatient">
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
        </div>

        <ConfirmationModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          handleConfirm={() => history.push(`/users/delete/${id}`)}
          title="Are you sure you want to delete this user?"
        >
          <p>This action is irreversible. To confirm, click "Confirm".</p>
        </ConfirmationModal>
      </div>
    </div>
    </div>
  );
}

export default UserDetail;
