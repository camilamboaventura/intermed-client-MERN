import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../apis/api";



function ConsultationCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    patient_id: "",
    doctor_id: "",
    date_of_appointment: "",
    time_of_appointment: "",
  
  });





  function handleChange(event) {
    if (event.target.files) {
      setState({ ...state, [event.target.name]: event.target.files[0] });
    } else {
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

  return (
    <div>
      <h1>New Appoitment </h1>

      <hr/>


      <form className="mb-5" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="formDateOfAppointment">Date of Appoitment</label>
    <input
      type="date"
      className="form-control "
      id="formDateOfAppointment"
      name="date_of_appointment"
      onChange={handleChange}
      value={state.date_of_appointment}
    />
  </div>

  <div className="form-group">
    <label htmlFor="formTimeOfAppointment">Time of Appoitment</label>
    <input
      type="text"
      className="form-control "
      id="formTimeOfAppointment"
      name="time_of_appointment"
      onChange={handleChange}
      value={state.time_of_appointment}
    />
  </div>


  <div className="form-group">
    <label htmlFor="formConsultationDoctor">Doctor</label>
    <input
      type="text"
      className="form-control"
      id="formConsultationDoctor"
      name="doctor_id"
      onChange={handleChange}
      value={state.doctor_id}
    />
  </div>

  <div className="form-group">
    <label htmlFor="formConsultationPatient">Patient</label>
    <input
      type="text"
      className="form-control"
      id="formConsultationPatient"
      name="patient_id"
      onChange={handleChange}
      value={state.patient_id}
    />
  </div>

  

  <hr />
  <button type="submit" className="btn btn-primary mb-5">
    Submit
  </button>
</form>


     
      
    </div>
  );
}

export default ConsultationCreate;