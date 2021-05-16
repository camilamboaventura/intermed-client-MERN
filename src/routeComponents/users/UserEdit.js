import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../apis/api";
import UserForm from "./UserForm";

function UserEdit() {
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

  const { id } = useParams();
  const history = useHistory();
  // Pré-popula o formulário com os dados do usuário através do id da URL
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get(`/users/${id}`);
        console.log(response);
        setState({ ...response.data });
        setAddress({ ...response.data.address });
      } catch (err) {
        console.error(err);
      }
    }
    fetchUser();
  }, [id]);
  function handleChange(event) {
    if (event.target.files) {
      setState({ ...state, [event.target.name]: event.target.files[0] });
      setAddress({ ...address, [event.target.name]: event.target.files[0] });
    } else {
      setState({ ...state, [event.target.name]: event.target.value });
      setAddress({ ...address, [event.target.name]: event.target.value });
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
        console.log("oi")
      event.preventDefault();
      // Fazendo um backup da imagem atual
      let uploadedImageUrl = state.user_pic;
      // Verifica se o ADMIN selecionou um novo arquivo para trocar a imagem, pois o valor que já estará armazenado em user_pic é a URL da imagem atual armazenada no Cloudinary
      if (typeof state.user_pic === "object") {
        uploadedImageUrl = await handleFileUpload(state.user_pic);
      }
      const response = await api.put(`/users/${id}`, {
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
      <h1>Edit User</h1>
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
export default UserEdit;
