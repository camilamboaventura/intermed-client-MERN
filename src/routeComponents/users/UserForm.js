function UserForm(props) {
  return (
    <form className="p-4" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="userFormName">Name</label>
        <input
          type="text"
          className="form-control"
          id="userFormName"
          name="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="userFormAddress">Date of Birth</label>
        <input
          type="date"
          className="form-control"
          id="userFormDateOfBirth"
          name="date_of_birth"
          onChange={props.handleChange}
          value={props.state.date_of_birth}
        />
      </div>

      <div className="form-group">
        <label htmlFor="userFormGender">Gender</label>
        <input
          type="text"
          className="form-control"
          id="userFormGender"
          name="gender"
          onChange={props.handleChange}
          value={props.state.gender}
        />
      </div>

      <div className="form-group">
        <label htmlFor="userFormSocialSecurityNumber">
          Social Security Number
        </label>
        <input
          type="text"
          className="form-control"
          id="userFormSocialSecurityNumber"
          name="social_security_number"
          onChange={props.handleChange}
          value={props.state.social_security_number}
        />
      </div>

      <div className="form-group">
        <label htmlFor="userFormEmail">Email</label>
        <input
          type="text"
          className="form-control"
          id="userFormEmail"
          name="email"
          onChange={props.handleChange}
          value={props.state.email}
        />
      </div>

      <div className="form-group">
        <label htmlFor="userFormPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="userFormPassword"
          name="password"
          onChange={props.handleChange}
          value={props.state.password}
        />
      </div>

      <h2 className="mt-3">Address Info</h2>
      <hr />
      <div className="form-group">
        <label htmlFor="UserFormPostCode">Post Code</label>
        <input
          type="text"
          className="form-control"
          id="UserFormPostCode"
          name="postCode"
          onChange={props.handleAddressChange}
          value={props.address.postCode}
        />
      </div>
      <div className="form-group">
        <label htmlFor="UserFormStreet">Street Name</label>
        <input
          type="text"
          className="form-control"
          id="UserFormStreet"
          name="street"
          onChange={props.handleAddressChange}
          value={props.address.street}
        />
      </div>
      <div className="form-group">
        <label htmlFor="UserFormNeighbourhood">Neighbourhood</label>
        <input
          type="text"
          className="form-control"
          id="UserFormNeighbourhood"
          name="neighbourhood"
          onChange={props.handleAddressChange}
          value={props.address.neighbourhood}
        />
      </div>
      <div className="form-group">
        <label htmlFor="UserFormCity">City</label>
        <input
          type="text"
          className="form-control"
          id="UserFormCity"
          name="city"
          onChange={props.handleAddressChange}
          value={props.address.city}
        />
      </div>
      <div className="form-group">
        <label htmlFor="UserFormState">State or Province</label>
        <input
          type="text"
          className="form-control"
          id="UserFormState"
          name="stateOrProvince"
          onChange={props.handleAddressChange}
          value={props.address.stateOrProvince}
        />
      </div>
      <div className="form-group">
        <label htmlFor="UserFormCountry">Country</label>
        <input
          type="text"
          className="form-control"
          id="UserFormCountry"
          name="country"
          onChange={props.handleAddressChange}
          value={props.address.country}
        />
      </div>

      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="userFormRoleAdmin"
          name="role"
          class="custom-control-input"
          onChange={props.handleChange}
          value="ADMIN"
          checked={props.state.role === "ADMIN"}
        />
        <label class="custom-control-label" htmlFor="userFormRoleAdmin">
          ADMIN
        </label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="userFormRoleDoctor"
          name="role"
          class="custom-control-input"
          onChange={props.handleChange}
          value="DOCTOR"
          checked={props.state.role === "DOCTOR"}
        />
        <label class="custom-control-label" htmlFor="userFormRoleDoctor">
          DOCTOR
        </label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="userFormRoleUser"
          name="role"
          class="custom-control-input"
          onChange={props.handleChange}
          value="USER"
          checked={props.state.role === "USER"}
        />
        <label class="custom-control-label" htmlFor="userFormRoleUser">
          USER
        </label>
      </div>
      <br />
      {props.state.role === "DOCTOR" ? (
        <div className="form-group">
          <label htmlFor="userFormRole">Medical Specialty</label>
          <input
            type="text"
            className="form-control"
            id="userFormMedicalSpecialty"
            name="medical_specialty"
            onChange={props.handleChange}
            value={props.state.medical_specialty}
          />
        </div>
      ) : null}

      <div className="form-group">
        <label htmlFor="userFormImage">User Picture</label>
        <input
          type="file"
          className="form-control"
          id="userFormImage"
          name="user_pic"
          onChange={props.handleChange}
        />
      </div>

      <hr />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default UserForm;
