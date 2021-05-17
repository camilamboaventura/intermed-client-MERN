import { useParams, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";


import { AuthContext } from "../contexts/authContext";

function NavbarLogged() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const { id } = useParams();
  return (
    <div>
    
    {loggedInUser.user.role === "ADMIN" ? (
    <nav className="nav nav-pills nav-fill">
  <NavLink className="nav-item nav-link" activeClassName="active" to="/main">Home Page</NavLink>
  <NavLink className="nav-item nav-link" activeClassName="active" to={`/profile/:${id}`}>My Profile</NavLink>
  <NavLink className="nav-item nav-link" activeClassName="active" to="/users">See All Users</NavLink>

</nav>
      ) : null}


      {loggedInUser.user.role === "DOCTOR" ? (
    <nav className="nav nav-pills nav-fill">
    <NavLink className="nav-item nav-link" activeClassName="active" to="/main">Home Page</NavLink>
    <NavLink className="nav-item nav-link" activeClassName="active" to={`/profile/:${id}`}>My Profile</NavLink>
    <NavLink className="nav-item nav-link" activeClassName="active" to="/patients">See All Patients</NavLink>
  <NavLink className="nav-item nav-link" to="/">vvvvv</NavLink>
</nav>
      ) : null}


      {loggedInUser.user.role === "USER" ? (
    <nav className="nav nav-pills nav-fill">
    <NavLink className="nav-item nav-link" activeClassName="active" to="/main">Home Page</NavLink>
    <NavLink className="nav-item nav-link" activeClassName="active" to={`/profile/:${id}`}>My Profile</NavLink>
    <NavLink className="nav-item nav-link" activeClassName="active" to="/patients">My Records</NavLink>
  <NavLink className="nav-item nav-link" to="/">vvvvv</NavLink>
</nav>
      ) : null}



    
      </div>
  );
}

export default NavbarLogged;

