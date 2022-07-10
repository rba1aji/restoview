import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const MakeAppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default MakeAppContext;

export const AppState = () => {
  return useContext(AppContext);
};
