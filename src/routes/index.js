import LoginComponent from '../pages/Authentication/Login';
import RegisterComponent from '../pages/Authentication/Register';
import FilterComponent from '../pages/Filter';
import HomeComponent from '../pages/Home';
import TopRatedComponent from '../pages/TopRated';
import NearbyComponent from '../pages/Nearby';
import PutRatingComponent from '../pages/PutRating';

const routes = [
  {
    path: '/auth/login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: '/auth/register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: '/',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: '/filter',
    component: FilterComponent,
    title: 'Filter',
  },
  {
    path: '/near-by-restaurants',
    component: NearbyComponent,
    title: 'Near By Restaurants',
  },
  {
    path: '/top-rated-restaurants',
    component: TopRatedComponent,
    title: 'Top Rated Restaurents',
  },
  {
    path: '/auth/put-rating',
    component: PutRatingComponent,
    title: 'Put Rating',
  },
];

export default routes;
