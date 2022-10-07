import { Switch, Route } from 'react-router-dom';
import Game from '../pages/Game';
import Login from '../pages/Login';

function routes() {
  return (

    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/game" component={ Game } />
    </Switch>

  );
}

export default routes;
