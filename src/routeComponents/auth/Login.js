import React, { useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import api from "../../apis/api";
import "../../assets/styles/PatientFeed.css"
import background from "../../assets/images/loginBG.jpg"
import { AuthContext } from "../../contexts/authContext";

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
    <div>
<img src={background} className="loginbackgroundPic" alt="background" />
<div className="patientsFeed">
<form onSubmit={handleSubmit}>
      <h1>Login</h1>

<div className="card" style={{width: '18rem'}} >
<div>
        <label htmlFor="signupFormEmail">E-mail Address</label>
        <input
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormPassword">Password</label>
        <input
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">Login!</button>

        
      </div>

</div>

      
    </form>
</div>


    </div>
    
  );
}

export default Login;




