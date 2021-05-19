import { Link } from "react-router-dom";
import "./UsersCard.css";

function ProductCard(props) {
  return (
    <Link
      className="text-decoration-none "
      key={props.patient._id}
      to={`/patients/${props.patient._id}`}
    >
      <div
        className="card card-fixed-height text-dark shadow rounded border-0 m-2"
        style={{ width: "100%" }}
      >
        <img
          className="card-img product-img mx-auto mt-2"
          src={props.patient.user_pic}
          alt="patient"
        />
        <div className="card-body">
          <h4 className="card-title">
            <small>{props.patient.name}</small>
          </h4>

          <p className="mb-0">
            <small className="card-text">
              {new Date(props.patient.date_of_birth).toLocaleDateString()}
            </small>
          </p>

          <p className="card-text mb-0">
            <small>{props.patient.gender}</small>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
