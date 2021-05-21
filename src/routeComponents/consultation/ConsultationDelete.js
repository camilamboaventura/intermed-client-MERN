import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../../apis/api";

function ConsultationDelete() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function deleteUser() {
      try {
        const response = await api.delete(`/books/${id}`);

        history.push("/");
      } catch (err) {
        console.error(err);
      }
    }
    deleteUser();
  }, [id, history]);

  return <p>Deleting...</p>;
}

export default ConsultationDelete;
