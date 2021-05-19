import React, { useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import api from "../../apis/api";
import "../../assets/styles/PatientFeed.css"
import { AuthContext } from "../../contexts/authContext";
import intermed from "../../assets/images/logo2.png";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      console.log(response.data);
      const { _id } = response.data.user;
      props.history.push(`/profile/${_id}`);
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="loginPage">
<div className="alignLogoLogin">
<div className="logoimageLogin">
<img
              className="intermedLogin"
              data-speed="0.6"
              src={intermed}
              alt="intermed"
              style={{marginTop:"13rem", marginLeft:"2rem"}}
            />
</div>
 <div style={{marginTop:"20rem"}}>
<form onSubmit={handleSubmit}>
      

<div style={{width: '18rem'}} >
<div>
        {/* <label htmlFor="signupFormEmail">E-mail Address</label> */}
        <input
        className="form-control placecolor"
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>

      <div>
        {/* <label htmlFor="signupFormPassword">Password</label> */}
        <input
        className="form-control placecolor"
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>

     

</div>

<button type="submit" class="btn btn-outline-danger mt-4" style={{ marginLeft:"6rem"}}>Login</button>
    </form>
    <div>
    
        

        
      </div>
    </div>
</div>


    </div>
    
  );
}

export default Login;




