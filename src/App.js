import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import ReduxUserName from "./components/pages/ReduxUserName/ReduxUserName";
import Layout from "./components/UI/Layout/Layout";

function App() {
  let routes = (
    <Switch>
      <Route exact path={"/"} component={MainPage} />
      <Route exact path={"/redux_user_name"} component={ReduxUserName} />
      <Redirect to={""} />
    </Switch>
  );
  return <Layout>{routes}</Layout>;
}

export default App;