import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';

function routes() {
  return (

    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>

  );
}

export default routes;
