import { useState, useEffect } from "react";
import RecordCard from "./RecordCard";
import api from "../../apis/api";
import NavbarLogged from "../../components/NavBarLogged";
import { useParams } from "react-router";

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
    <div>
      <NavbarLogged />
      <div className="row">
        {records.map((record) => {
          return (
            <div key={record._id} className="col-12 col-sm-4 col-md-3">
              <RecordCard {...record} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecordFeed;
