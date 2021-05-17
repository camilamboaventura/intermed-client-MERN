import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import PatientFeed from "../routeComponents/patients/PatientFeed";
import PatientDetail from "../routeComponents/patients/PatientDetail";
import UserFeed from "../routeComponents/users/UserFeed";
import UserDetail from "../routeComponents/users/UserDetail";
import UserCreate from "../routeComponents/users/UserCreate";
import UserEdit from "../routeComponents/users/UserEdit";
import UserDelete from "../routeComponents/users/UserDelete";
import RecordCreate from "../routeComponents/records/RecordCreate";
import Profile from "../routeComponents/auth/Profile";
import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/patients" component={PatientFeed} />
          <Route exact path="/patients/:id" component={PatientDetail} />
          <Route exact path="/users" component={UserFeed} />
          <Route exact path="/users/:id" component={UserDetail} />
          <Route exact path="/signup" component={UserCreate} />
          <Route exact path="/users/edit/:id" component={UserEdit} />
          <Route exact path="/users/delete/:id" component={UserDelete} />
          <Route exact path="/patients/record/:id" component={RecordCreate} />
          <Route exact path="/profile/:id" component={Profile} />
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;

//rota /patients so pode ser acessada com token de medico para vizualizar os pacientes.
