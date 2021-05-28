import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavbarLogged from "../../components/NavBarLogged";
import "../../assets/styles/AllPatients.css";

import api from "../../apis/api";

function ConsultationCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    patient_id: "",
    doctor_id: "",
    date_of_appointment: "",
    time_of_appointment: "",
  });

  const hours = ["10:00", "14:00", "16:30"]

  const [flag, setFlag] = useState(false);

  const [doctors, setDoctors] = useState([]);
 
  function handleChange(event) {
    if (event.target.files) {
      setState({ ...state, [event.target.name]: event.target.files[0] });
    } else {
      console.log(event.target)
      setState({ ...state, [event.target.name]: event.target.value });
    } 
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const response = await api.post("/book", {
        ...state,
      });

      // Redireciona programaticamente para a URL '/'
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    async function fetchRecords() {
      try {
        const response = await api.get("/doctors");
        console.log(response);
        setDoctors([...response.data]);
        
      } catch (err) {
        console.error(err);
      }
    }
    fetchRecords();
    if (state.date_of_appointment !== "" && state.doctor_id !== "") {
      setFlag (true)
    }
  }, [state]);

  console.log(doctors);
  return (
    <div className="newAppointment">
      <NavbarLogged />

      <div className="container mt-3">
        <h1>New Appointment </h1>

        <hr />

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="formDateOfAppointment">Date of Appointment</label>
            <input
              type="date"
              className="form-control "
              id="formDateOfAppointment"
              name="date_of_appointment"
              onChange={handleChange}
              value={state.date_of_appointment}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Doctor
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              onChange={handleChange}
              value={state.doctor_id}
              name="doctor_id"
            >
             <option selected>
                  Choose your doctor
                </option>
              {doctors.map((doctor) => {
                return(
                <option key={doctor._id} value={doctor._id}>
                  {doctor.name} 
                </option>)
              })}
            </select>
          </div>

          {flag ? <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="formTimeOfAppointment">
              Time of Appointment
              </label>
            </div>
            <select
              className="custom-select"
              id="formTimeOfAppointment"
              onChange={handleChange}
              value={state.time_of_appointment}
              name="time_of_appointment"
            >
             <option selected>
                  Set your Appointment
                </option>
              {hours.map((hour) => {
                return(
                <option key={hour} value={hour}>
                  {hour} 
                </option>)
              })}
            </select>
          </div> : ""}

          <hr />
          <button type="submit" className="btn btn-primary mb-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsultationCreate;
