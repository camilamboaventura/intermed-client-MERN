import { Link } from "react-router-dom";
import "./UsersCard.css";

function PatientCard(props) {
  return (
    <Link
      className="text-decoration-none"
      key={props.patient._id}
      to={`/patients/${props.patient._id}`}
    >
      <div
        className="card text-dark shadow rounded border-0 m-3 "
        style={{ width: "100%" }}
      >
        <img
          className="card-img product-img mx-auto mt-2 pt-4  "
          src={props.patient.user_pic}
          alt="patient"
          style={{ maxWidth: "8rem" }}
        />
        <div className="card-body" style={{ textAlign: "center" }}>
          <h4 className="card-text">
            <small>{props.patient.name}</small>
          </h4>

          <p className="mb-0">
            <small className="card-text">ID: {props.patient._id}</small>
          </p>

          <p className="mb-0">
            <small className="card-text">
              Date of Birth:{" "}
              {new Date(props.patient.date_of_birth).toLocaleDateString()}
            </small>
          </p>

          <p className="card-text mb-0">
            <small>Gender: {props.patient.gender}</small>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PatientCard;
