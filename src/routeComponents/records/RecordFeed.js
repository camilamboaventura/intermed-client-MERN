import { useState, useEffect } from "react";
import RecordCard from "./RecordCard";
import api from "../../apis/api";
import NavbarLogged from "../../components/NavBarLogged";
import { useParams } from "react-router";
import "../../assets/styles/Record.css";

function RecordFeed() {
  const [records, setRecords] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchRecords() {
      try {
        const response = await api.get(`/patient/${id}/records`);
        console.log(response);
        setRecords([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRecords();
  }, [id]);

  return (
    <div className="backImg">
      <NavbarLogged />
      <div className="container">
        <div className="row">
          {records.map((record) => {
            return (
              <div className="recordCard" key={record._id}>
                <RecordCard {...record} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RecordFeed;
