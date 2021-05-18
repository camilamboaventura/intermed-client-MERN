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
        <nav className="nav nav-pills nav-fill">
          <Link
            className="nav-item nav-link"
            activeClassName="active"
            to="/main"
          >
            Home Page
          </Link>
          <Link
            className="nav-item nav-link"
            activeClassName="active"
            to={`/profile/${loggedUser._id}`}
          >
            My Profile
          </Link>
          <Link
            className="nav-item nav-link"
            activeClassName="active"
            to="/users"
          >
            See All Users
          </Link>
        </nav>
      ) : null}
      {loggedInUser.user.role === "DOCTOR" ? (
        <nav className="nav nav-pills nav-fill">
          <Link
            className="nav-item nav-link"
            activeClassName="active"
            to="/main"
          >
            Home Page
          </Link>
          <Link
            className="nav-item nav-link"
            activeClassName="active"
            to={`/profile/${loggedUser._id}`}
          >
            My Profile
          </Link>
          <Link
            className="nav-item nav-link"
            activeClassName="active"
            to="/patients"
          >
            See All Patients
          </Link>
          <Link className="nav-item nav-link" to="/">
            vvvvv
          </Link>
        </nav>
      ) : null}
      {loggedInUser.user.role === "USER" ? (
        <nav className="nav nav-pills nav-fill">
          <Link
            className="nav-item nav-link"
            activeClassName="active"
            to="/main"
          >
            Home Page
          </Link>
          <Link
            className="nav-item nav-link"
            activeClassName="active"
            to={`/profile/${loggedUser._id}`}
          >
            My Profile
          </Link>
          <Link
            className="nav-item nav-link"
            activeClassName="active"
            to={`/patient/${loggedUser._id}/records`}
          >
            My Records
          </Link>
          <Link className="nav-item nav-link" to="/">
            vvvvv
          </Link>
        </nav>
      ) : null}{" "}
    </div>
  );
}

export default NavbarLogged;
