import LoginComponent from '../pages/Authentication/Login';
import RegisterComponent from '../pages/Authentication/Signup';
import FilterComponent from '../pages/Filter';
import HomeComponent from '../pages/Home';
import TopRatedComponent from '../pages/TopRated';
import NearbyComponent from '../pages/Nearby';
import PutRatingComponent from '../pages/PutRating';
import { AppState } from '../AppContext';
import { signOut } from 'firebase/auth';
import {auth} from '../configs/firebaseConfig';
function isLoggedIn() {
  const { user } = AppState();
  return user == null;
}
function Logout(){
  useEffect(()=>{
    signOut(auth);
  const {setAlert} =AppState();
  setAlert({
    show:true,
    variant:'success',
    msg:'Logout successful',
  });
  },[])
}
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
    show: !{isLoggedIn()},
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
    show: {isLoggedIn()},
    path: '/put-rating',
    component: PutRatingComponent,
    title: 'Put Rating',
  },
  {
    show:{isLoggedIn()},
    path:'auth/logout',
    // component:Logout,
    title:'Logout',
  }
];

export default routes;
