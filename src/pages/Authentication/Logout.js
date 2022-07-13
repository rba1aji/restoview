import {Auth} from '../configs/firebaseConfig'
import {signOut} from 'firebase/auth';
import {AppState} from '../AppContext';
export default function Logout() {
  signOut(auth);
  const { setAlert } = AppState();
  setAlert({
    show: true,
    variant: 'success',
    msg: 'Logout successful',
  });
}