import LoginComponent from '../containers/Login'
import RegisterComponent from '../containers/Register'
import FilterComponent from '../containers/Filter'
import HomeComponent from '../containers/Home'
import TopRatedComponent from '../containers/TopRated'
import NearbyComponent from '../containers/Nearby'
import PutRatingComponent from '../containers/PutRating'

const routes=[
  {
    "path":"/auth/login",
    "component":LoginComponent,
    "title":"Login",
  },
  {
    "path":"/auth/register",
    "component":RegisterComponent,
    "title":"Register",
  },
  {
    "path":"/",
    "component":HomeComponent,
    "title":"Home"
  },
  {
    "path":"/filter",
    "component":FilterComponent,
    "title":"Filter"
  },
  {
    "path":"/near-by",
    "component":NearbyComponent,
    "title":"Near By Restaurants",
  },
  {
    "path":"/auth/top-rated",
    "component":TopRatedComponent,
    "title":"Top Rated Restaurents",
  },
  {
    "path":"/auth/put-rating",
    "component":PutRatingComponent,
    "title":"Put Rating",
  }
]

export default routes;