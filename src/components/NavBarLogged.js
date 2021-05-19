import { useParams, NavLink, Link, useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";
import React from "react";
import { AuthContext } from "../contexts/authContext";
import logo from "../assets/images/logo01.png";
import "../assets/styles/NavBarLogged.css";

function NavbarLogged() {
  const history = useHistory();
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const authContext = useContext(AuthContext);
  const loggedUser = authContext.loggedInUser.user;
  const { _id } = loggedInUser.user;
  return (
    <div>
      {loggedInUser.user.role === "ADMIN" ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/main">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
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
            <ul className="navbar-collapse d-flex justify-content-end">
              <li className="nav-item active">
                <Link
                  className="nav-link loginText"
                  to={`/profile/${loggedUser._id}`}
                >
                  My Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link loginText" to="/signup">
                  Create New User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link loginText" to="/admins">
                  Administation Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link loginText" to="/doctors">
                  Medical Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link loginText" to="/users">
                  Pacients
                </Link>
              </li>
              <li>
                {loggedInUser ? (
                  <Link
                    onClick={(event) => {
                      event.preventDefault();
                      // Fazendo processo de Logout
                      setLoggedInUser({ user: {}, token: "" });
                      localStorage.removeItem("loggedInUser");
                      history.push("/main");
                    }}
                  >
                    &nbsp; <text className="loginText">Logout</text>
                  </Link>
                ) : null}
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
      {loggedInUser.user.role === "DOCTOR" ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/main">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
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
            <ul className="navbar-collapse d-flex justify-content-end">
              <li className="nav-item active">
                <Link
                  className="nav-link loginText"
                  to={`/profile/${loggedUser._id}`}
                >
                  My Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link loginText" to="/patients">
                  Patients
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link loginText" to="/patients">
                  Appoitments
                </Link>
              </li>
              <li>
                {loggedInUser ? (
                  <Link
                    onClick={(event) => {
                      event.preventDefault();
                      // Fazendo processo de Logout
                      setLoggedInUser({ user: {}, token: "" });
                      localStorage.removeItem("loggedInUser");
                      history.push("/main");
                    }}
                  >
                    &nbsp; <text className="loginText">Logout</text>
                  </Link>
                ) : null}
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
      {loggedInUser.user.role === "USER" ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/main">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
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
            <ul className="navbar-collapse d-flex justify-content-end">
              <li className="nav-item active">
                <Link
                  className="nav-link navText"
                  to={`/profile/${loggedUser._id}`}
                >
                  My Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link navText"
                  to={`/patient/${loggedUser._id}/records`}
                >
                  My Records
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navText" to="/books">
                  Appoitments
                </Link>
              </li>
              <li>
                {loggedInUser ? (
                  <Link
                    onClick={(event) => {
                      event.preventDefault();
                      // Fazendo processo de Logout
                      setLoggedInUser({ user: {}, token: "" });
                      localStorage.removeItem("loggedInUser");
                      history.push("/main");
                    }}
                  >
                    &nbsp; <text className="loginText">Logout</text>
                  </Link>
                ) : null}
              </li>
            </ul>
          </div>
        </nav>
      ) : null}{" "}
    </div>
  );
}
export default NavbarLogged;
