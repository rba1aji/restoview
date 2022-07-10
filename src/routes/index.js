import LoginComponent from '../pages/Authentication/Login';
import RegisterComponent from '../pages/Authentication/Signup';
import FilterComponent from '../pages/Filter';
import HomeComponent from '../pages/Home';
import TopRatedComponent from '../pages/TopRated';
import NearbyComponent from '../pages/Nearby';
import PutRatingComponent from '../pages/PutRating';

const routes = [
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
    title: 'Nearby',
  },
  {
    path: '/top-rated-restaurants',
    component: TopRatedComponent,
    title: 'Top Rated',
  },
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
    path: '/auth/put-rating',
    component: PutRatingComponent,
    title: 'Put Rating',
  },
];

export default routes;
