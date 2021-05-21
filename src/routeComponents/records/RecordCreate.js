import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../../apis/api";
import "../../assets/styles/PatientFeed.css"
import NavbarLogged from "../../components/NavBarLogged";

function RecordCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    date_of_visit: "",
    allergy: [],
    chief_complaint: "",
    history_illness: "",
    medications: [],
    test_results: "",
  });

  const { id } = useParams();

  function handleChange(event) {
    if (event.target.files) {
      setState({ ...state, [event.target.name]: event.target.files[0] });
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
    }
  }

  async function handleFileUpload(file) {
    try {
      // FormData é uma função construtora global nativa do Javascript que cria um objeto de Formulario no formato multipart/form esperado pelo backend
      const uploadData = new FormData();

      // 'image' precisa bater com o valor de uploadCloud.single() no nosso backend
      uploadData.append("image", file);

      const response = await api.post("/image-upload", uploadData);

      return response.data.fileUrl;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      let uploadedImageUrl = "";
      if (state.test_results) {
        uploadedImageUrl = await handleFileUpload(state.test_results);
      }

      const response = await api.post(`/record/${id}`, {
        ...state,
        test_results: uploadedImageUrl,
      });

      // Redireciona programaticamente para a URL '/'
      history.push("/patients");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="createRecordBG">
    
    <NavbarLogged/>
    <div className="container mt-5">
    <h1>New Patient's Record </h1>

<hr />
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="recordFormDateOfVisit">Date of Visit</label>
    <input
      type="date"
      className="form-control "
      id="recordFormDateOfVisit"
      name="date_of_visit"
      onChange={handleChange}
      value={state.date_of_visit}
    />
  </div>

  <div className="form-group">
    <label htmlFor="recordFormChiefComplaint">Chief Complaint</label>
    <input
      type="text"
      className="form-control"
      id="recordFormChiefComplaint"
      name="chief_complaint"
      onChange={handleChange}
      value={state.chief_complaint}
    />
  </div>

  <div className="form-group">
    <label htmlFor="recordFormHistoryIllness">History Illness</label>
    <input
      type="text"
      className="form-control"
      id="recordFormHistoryIllness"
      name="history_illness"
      onChange={handleChange}
      value={state.history_illness}
    />
  </div>

  <div className="form-group">
    <label htmlFor="recordFormMedications">Medications</label>
    <input
      type="text"
      className="form-control"
      id="recordFormMedications"
      name="medications"
      onChange={handleChange}
      value={state.medications}
    />
  </div>

  <div className="form-group">
    <label htmlFor="recordFormAllergy">Allergies</label>
    <input
      type="text"
      className="form-control"
      id="recordFormAllergy"
      name="allergy"
      onChange={handleChange}
      value={state.allergy}
    />
  </div>

  <div className="form-group">
    <label htmlFor="recordFormTestResults">Test Results</label>
    <input
      type="text"
      className="form-control"
      id="recordFormTestResults"
      name="test_results"
      onChange={handleChange}
    />
  </div>

  <hr />
  <button type="submit" className="btn btn-primary mb-5">
    Submit
  </button>
</form>
</div>

    
      
    </div>
  );
}

export default RecordCreate;
