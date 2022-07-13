import { AppState } from '../AppContext';

export function isLoggedIn() {
  const { user } = AppState();
  return user == null;
}