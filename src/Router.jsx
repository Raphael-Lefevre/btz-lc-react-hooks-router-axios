import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './layout/Layout';
import Article from './pages/Article';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/article/:id" component={Article} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
