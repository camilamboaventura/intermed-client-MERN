import { useParams, NavLink, Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import React from "react";
import { AuthContext } from "../contexts/authContext";
import logo from "../assets/images/logo01.png";
import "../assets/styles/Home.css";

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
          <NavLink className="navbar-brand m-2" to="/main">
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
            <ul className="navbar-collapse d-flex justify-content-end m-2">
              <li className="nav-item active loginText">
                <Link
                  className="nav-link loginText"
                  to={`/profile/${loggedUser._id}`}
                >
                  <text className="loginText">Profile</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup">
                <text className="loginText">Create New User</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link loginText" to="/admins">
                <text className="loginText">Administation Team</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" loginText" to="/doctors">
                <text className="loginText">Medical Team</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link loginText" to="/users">
                <text className="loginText">Patients</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
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
                    &nbsp;<text className="loginText">Logout</text>
                  </Link>
                ) : null}
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
      {loggedInUser.user.role === "DOCTOR" ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand m-2" to="/main">
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
            <ul className="navbar-collapse d-flex justify-content-end m-2">
              <li className="nav-item active">
                <Link
                  className=" loginText"
                  to={`/profile/${loggedUser._id}`}
                >
                  <text className="loginText">Profile</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link loginText" to="/patients">
                <text className="loginText">Patients</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="loginText" to="/patients">
                  <text className="loginText">Appointments</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
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
                    &nbsp; &nbsp;<text className="loginText">Logout</text>
                  </Link>
                ) : null}
              </li>
            </ul>
          </div>
        </nav>
      ) : null}
      {loggedInUser.user.role === "USER" ? (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand m-2" to="/main">
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
            <ul className="navbar-collapse d-flex justify-content-end m-2">
              <li className="nav-item active">
                <Link className="" to={`/profile/${loggedUser._id}`}>
                  <text className="loginText">Profile</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link loginText"
                  to={`/patient/${loggedUser._id}/records`}
                >
                  <text className="loginText">Records</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="loginText" to="/books">
                  <text className="loginText">Appointments</text>&nbsp;&nbsp;{" "}
                  <text className="loginText">|</text>
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
                    &nbsp; &nbsp;<text className="loginText">Logout</text>
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
