import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../routeComponents/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import PatientFeed from "../routeComponents/patients/PatientFeed"
import PatientDetail from "../routeComponents/patients/PatientDetail"

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthRouter} />
          <Route path="/patients" component={PatientFeed} /> 
          <Route path="/users/:id" component={PatientDetail} /> 
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;

//rota /patients so pode ser acessada com token de medico para vizualizar os pacientes. 

