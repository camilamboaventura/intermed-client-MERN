import { Link } from "react-router-dom";
import "../patients/UsersCard.css";

function UserCard(props) {
  return (
    <Link
      className="text-decoration-none"
      key={props.user._id}
      to={`/users/${props.user._id}`}
    >
      <div
        className="card text-dark shadow rounded border-0 m-3"
        style={{ width: "100%", height: "90%" }}
      >
        <img
          className="card-img product-img mx-auto mt-2 pt-4  "
          src={props.user.user_pic}
          alt="user"
          style={{ maxWidth: "8rem", minWidth:"8rem" }}
        />
        <div className="card-body" style={{ textAlign: "center" }}>
          <h4 className="card-text">
            <small>{props.user.name}</small>
          </h4>

          {/* <p className="mb-0">
            <small className="card-text">
              {new Date(props.user.date_of_birth).toLocaleDateString()}
            </small>
          </p> */}

          <p className="mb-0">
            <small className="card-text">ID: {props.user._id}</small>
          </p>

          <p className="card-text mb-0">
            <small>{props.user.role}</small>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
