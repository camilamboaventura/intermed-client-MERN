import { useParams, NavLink, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";
import React from "react";
import { AuthContext } from "../contexts/authContext";
function NavbarLogged() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const authContext = useContext(AuthContext);
  const loggedUser = authContext.loggedInUser.user;
  // const { _id } = response.data.user;
  return (
    <div>
      {loggedInUser.user.role === "ADMIN" ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/main">
            Intermed
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={`/profile/${loggedUser._id}`}>
                  My Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admins">
                  Administation Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/doctors">
                  Medical Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Pacients
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
      {loggedInUser.user.role === "DOCTOR" ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/main">
            Intermed
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={`/profile/${loggedUser._id}`}>
                  My Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/patients">
                  Patients
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/patients">
                  Appoitments
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
      {loggedInUser.user.role === "USER" ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/main">
            Intermed
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={`/profile/${loggedUser._id}`}>
                  My Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={`/patient/${loggedUser._id}/records`}
                >
                  My Records
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">
                  Appoitments
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : null}{" "}
    </div>
  );
}
export default NavbarLogged;