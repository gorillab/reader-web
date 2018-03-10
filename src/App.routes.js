import HomeRender from './components/Home';
import ForYou from './components/ForYou';
import Saved from './components/Saved';
import Error404 from './components/Errors/Error404';

const routes = [{
  key: 'home',
  path: '/',
  exact: true,
  render: HomeRender,
}, {
  key: 'source',
  path: '/source/:source([0-9a-z]{24})',
  render: HomeRender,
}, {
  key: 'for-you',
  path: '/for-you',
  component: ForYou,
}, {
  key: 'saved',
  path: '/saved',
  component: Saved,
}, {
  key: 'error-404',
  component: Error404,
}];

export default routes;
