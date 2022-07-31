import FilterComponent from '../pages/Filter';
import HomeComponent from '../pages/Home';
import TopRatedComponent from '../pages/Famous';
import NearbyComponent from '../pages/Nearby';
import PutRatingComponent from '../pages/PutRating';
import Dashboard from '../pages/Dashboard';

const routes = [
  {
    private: false,
    path: '/',
    component: HomeComponent,
    title: 'Home',
  },
  {
    private: false,
    path: '/filter',
    component: FilterComponent,
    title: 'Filter',
  },
  {
    private: false,
    path: '/near-by-restaurants',
    component: NearbyComponent,
    title: 'Nearby',
  },
  {
    private: false,
    path: '/famous-restaurants',
    component: TopRatedComponent,
    title: 'Famous',
  },
  // {
  //   private: true,
  //   path: '/put-rating',
  //   component: PutRatingComponent,
  //   title: 'Write A Review',
  // },
  {
    private: true,
    path: '/dashboard/:uid',
    component: Dashboard,
    title: 'Dashboard',
  },
];

export default routes;
