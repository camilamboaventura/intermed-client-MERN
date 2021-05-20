import { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../apis/api";
import NavbarLogged from "../../components/NavBarLogged"
import UserForm from "./UserForm";

function UserCreate() {
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    email: "",
    social_security_number: 0,
    user_pic: "",
    date_of_birth: "",
    gender: "",
    role: "",
  });

  const [address, setAddress] = useState({
    street: "",
    neighbourhood: "",
    city: "",
    postCode: "",
    stateOrProvince: "",
    country: "",
  });

  function handleAddressChange(event) {
    setAddress({ ...address, [event.target.name]: event.target.value });
  }

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
      console.log(response)
      return response.data.fileUrl;
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      let uploadedImageUrl = "";
      if (state.user_pic) {
        uploadedImageUrl = await handleFileUpload(state.user_pic);
      }

      const response = await api.post("/signup", {
        ...state,
        address: { ...address },
        user_pic: uploadedImageUrl,
      });

      // Redireciona programaticamente para a URL '/'
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
    <NavbarLogged/>
      <h1>New User </h1>

      <hr />

      <UserForm
        state={state}
        address={address}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleAddressChange={handleAddressChange}
      />
    </div>
  );
}

export default UserCreate;
