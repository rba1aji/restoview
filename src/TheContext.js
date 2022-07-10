import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function MakeAppContext() {
  const [loading, setLoading] = useState(false);
  return (
    <AppContext.provider
      value={{
        loading,
      }}
    >
      {children}
    </AppContext.provider>
  );
}

export default function AppState() {
  return useContext(AppContext);
}
