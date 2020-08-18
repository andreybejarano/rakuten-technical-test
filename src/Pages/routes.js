import Home from './Home';
import ContentDetail from './ContentDetail';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    layout: 'default'
  },
  {
    path: '/content-detail/:id',
    component: ContentDetail,
    exact: true,
    layout: 'default'
  }
];
