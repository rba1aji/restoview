import LoginComponent from '../pages/Authentication/Login';
import RegisterComponent from '../pages/Authentication/Signup';
import FilterComponent from '../pages/Filter';
import HomeComponent from '../pages/Home';
import TopRatedComponent from '../pages/TopRated';
import NearbyComponent from '../pages/Nearby';
import PutRatingComponent from '../pages/PutRating';
// import { AppState } from '../AppContext';
// import { signOut } from 'firebase/auth';
// import { auth } from '../configs/firebaseConfig';
// import { AppState } from '../AppContext';



// function isLoggedIn() {
//   const { user } = AppState();
//   return user?true:false;
// }

const routes = [
  {
    show: true,
    path: '/',
    component: HomeComponent,
    title: 'Home',
  },
  {
    show: true,
    path: '/filter',
    component: FilterComponent,
    title: 'Filter',
  },
  {
    show: true,
    path: '/near-by-restaurants',
    component: NearbyComponent,
    title: 'Nearby',
  },
  {
    show: true,
    path: '/top-rated-restaurants',
    component: TopRatedComponent,
    title: 'Top Rated',
  },
  {
    show:false,
    path: '/auth/login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    show: false,
    path: '/auth/register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    show: false,
    path: '/put-rating',
    component: PutRatingComponent,
    title: 'Put Rating',
  },
];

export default routes;
