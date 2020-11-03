import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Article from './pages/Article';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact patch="/" component={Home} />
        <Route path="/article/:id" component={Article} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
