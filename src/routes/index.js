import LoginComponent from '../pages/Authentication/Login';
import RegisterComponent from '../pages/Authentication/Signup';
import FilterComponent from '../pages/Filter';
import HomeComponent from '../pages/Home';
import TopRatedComponent from '../pages/TopRated';
import NearbyComponent from '../pages/Nearby';
import PutRatingComponent from '../pages/PutRating';

const routes = [
  {
    nav:true,
    path: '/',
    component: HomeComponent,
    title: 'Home',
  },
  {
    nav:true,
    path: '/filter',
    component: FilterComponent,
    title: 'Filter',
  },
  {
    nav:true,
    path: '/near-by-restaurants',
    component: NearbyComponent,
    title: 'Nearby',
  },
  {
    nav:true,
    path: '/top-rated-restaurants',
    component: TopRatedComponent,
    title: 'Top Rated',
  },
  {
    nav:true,
    path: '/auth/login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    nav:false,
    path: '/auth/register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    nav:false,
    path: '/auth/put-rating',
    component: PutRatingComponent,
    title: 'Put Rating',
  },
];

export default routes;
