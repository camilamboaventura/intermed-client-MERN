import { Link } from "react-router-dom";
// import "../patients/UsersCard.css";

function RecordCard(props) {
  console.log(props);
  return (
    <div>
      <h4>
        Record Information of{" "}
        {new Date(props.date_of_visit).toLocaleDateString()}
      </h4>
      <hr />
      <strong>Doctor: </strong>
      {props.created_by.name} <br />
      <strong>Doctor Specialty: </strong>
      {props.created_by.medical_specialty}
      <hr />
      <ul>
        <li>
          <strong>Chief Complaint: </strong>
          {props.chief_complaint}
        </li>
        <li>
          <strong>History Illness:: </strong>
          {props.history_illness}
        </li>

        <li>
          <strong>Allergy: </strong>
          {props.allergy}
        </li>

        <li>
          <strong>Medications: </strong>
          {props.medications}
        </li>

        <li>
          <strong>Test Results: </strong>
          {props.test_results}
        </li>
      </ul>
    </div>
    

  );
}

export default RecordCard;
