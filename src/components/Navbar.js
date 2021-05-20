import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../assets/images/logo01.png";
import "../assets/styles/Home.css";
import { AuthContext } from "../contexts/authContext";

function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const { _id } = loggedInUser.user;
  return (
    <div className="allNavbar">
      <nav
        className="navbar navbar-expand-lg"
      >
        <div className="ml-3">
          <NavLink className="navbar-brand" to="/main">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
        </div>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarText"
        >
          <div className="mr-3">
            {loggedInUser.user.name ? (
              <div className="loginNavbar">
                <Link to={`/profile/${_id}`} as={NavLink}>
                  <text className="loginText">Profile</text>&nbsp;{" "}
                  <text className="loginText">|</text>
                </Link>
                <Link
                  onClick={(event) => {
                    event.preventDefault();
                    // Fazendo processo de Logout
                    setLoggedInUser({ user: {}, token: "" });
                    localStorage.removeItem("loggedInUser");
                  }}
                >
                  &nbsp; <text className="loginText">Logout</text>
                </Link>
                <div variant="transparent">
                  &nbsp; &nbsp; &nbsp;
                  <img
                    src={`https://ui-avatars.com/api/?name=${loggedInUser.user.name}&size=32&background=random`}
                    className="rounded-circle"
                    alt="Profile"
                  />
                </div>
              </div>
            ) : (
              <NavLink
                className="nav-link text-white"
                activeClassName="active"
                to="/auth/login"
              >
                <text className="loginText">Login</text>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
