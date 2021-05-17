import { useParams, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";

import { AuthContext } from "../contexts/authContext";

function Navbar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const { id } = useParams();
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="ml-3">
        <NavLink className="navbar-brand" to="/main">
          Intermed
        </NavLink>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-between"
        id="navbarText"
      >
        
        <div className="mr-3">
          {loggedInUser.user.name ? (
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                <img
                  src={`https://ui-avatars.com/api/?name=${loggedInUser.user.name}&size=32&background=random`}
                  className="rounded-circle"
                  alt="Profile"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item to={`/profile/${id}`} as={NavLink}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(event) => {
                    event.preventDefault();
                    // Fazendo processo de Logout
                    setLoggedInUser({ user: {}, token: "" });
                    localStorage.removeItem("loggedInUser");
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <NavLink
              className="nav-link text-white"
              activeClassName="active"
              to="/auth/login"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
