import React from 'react';
import { AppState } from '../../reducers/AppContext';

export default function Dashboard() {
  const { user } = AppState();
  return <div>Hello, {user.displayName}!</div>;
}
