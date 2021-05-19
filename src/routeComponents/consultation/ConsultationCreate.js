import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavbarLogged from "../../components/NavBarLogged";


import api from "../../apis/api";



function ConsultationCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    patient_id: "",
    doctor_id: "",
    date_of_appointment: "",
    time_of_appointment: "",
  
  });

  const [doctors, setDoctors] = useState(
   []
  
  );
  const [isBusy, setBusy] = useState(true)


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

  useEffect(() => {
    async function fetchRecords() {
      try {
        const response = await api.get("/doctors");
        console.log(response);
        setDoctors([...response.data]);
        setBusy(false)
      } catch (err) {
        console.error(err);
      }
    }
    fetchRecords();
  }, [isBusy]);


  
  
console.log(doctors)
  return (
    <div>
    <NavbarLogged />
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


  <div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Doctor</label>
  </div>
  <select className="custom-select" id="inputGroupSelect01" onChange={handleChange} value={state.doctor_id}>
  
    {doctors.map((doctor)=>{

      <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
    })}
    
  </select>
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