import { Switch, Route } from 'react-router-dom';
import Game from '../pages/Game';
import Login from '../pages/Login';
import Configuration from '../pages/Configuration';

function routes() {
  return (

    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/configuration" component={ Configuration } />
    </Switch>

  );
}

export default routes;
