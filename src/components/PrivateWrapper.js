import { AppState } from '../reducers/AppContext';

export default function PrivateWrapper(props) {
  const user = AppState();
  return !user ? null : props.children;
}
