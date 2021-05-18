import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../../apis/api";

function UserDelete() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function deleteUser() {
      try {
        const response = await api.delete(`/users/${id}`);

        history.push("/users");
      } catch (err) {
        console.error(err);
      }
    }
    deleteUser();
  }, [id, history]);

  return <p>Deleting...</p>;
}

export default UserDelete;
