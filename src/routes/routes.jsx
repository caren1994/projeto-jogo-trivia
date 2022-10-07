import { Switch, Route } from 'react-router-dom';
import Configuration from '../pages/Configuration';
import Login from '../pages/Login';

function routes() {
  return (

    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/configuration" component={ Configuration } />
    </Switch>

  );
}

export default routes;
