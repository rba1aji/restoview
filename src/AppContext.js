import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export default function MakeAppContext({children}) {
  const [loading, setLoading] = useState(false);
  return (
    <AppContext.provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.provider>
  );
}

export const AppState =()=> {
  return useContext(AppContext);
}
