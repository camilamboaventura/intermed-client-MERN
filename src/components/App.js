import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import PatientFeed from "../routeComponents/patients/PatientFeed";
import PatientDetail from "../routeComponents/patients/PatientDetail";
import UserFeed from "../routeComponents/users/UserFeed";
import AdminFeed from "../routeComponents/users/AdminFeed";
import MedicalFeed from "../routeComponents/users/MedicalFeed";
import UserDetail from "../routeComponents/users/UserDetail";
import UserCreate from "../routeComponents/users/UserCreate";
import UserEdit from "../routeComponents/users/UserEdit";
import UserDelete from "../routeComponents/users/UserDelete";
import RecordCreate from "../routeComponents/records/RecordCreate";
import Profile from "../routeComponents/auth/Profile";
import RecordFeed from "../routeComponents/records/RecordFeed";

import { AuthContextComponent } from "../contexts/authContext";
import ConsultationCreate from "../routeComponents/consultation/ConsultationCreate";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/main" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/patients" component={PatientFeed} />
          <Route exact path="/patients/:id" component={PatientDetail} />
          <Route exact path="/users" component={UserFeed} />
          <Route exact path="/admins" component={AdminFeed} />
          <Route exact path="/doctors" component={MedicalFeed} />
          <Route exact path="/users/:id" component={UserDetail} />
          <Route exact path="/signup" component={UserCreate} />
          <Route exact path="/users/edit/:id" component={UserEdit} />
          <Route exact path="/users/delete/:id" component={UserDelete} />
          <Route exact path="/patients/record/:id" component={RecordCreate} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/patient/:id/records" component={RecordFeed} />
          <Route exact path="/books" component={ConsultationCreate} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;

//rota /patients so pode ser acessada com token de medico para vizualizar os pacientes.
