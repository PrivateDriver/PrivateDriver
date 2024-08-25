import React, { createContext, useState, useContext, ReactNode } from 'react';

interface TabBarVisibilityContextProps {
  isTabBarVisible: boolean;
  setIsTabBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TabBarVisibilityContext = createContext<TabBarVisibilityContextProps | undefined>(undefined);

interface TabBarVisibilityProviderProps {
  children: ReactNode;
}

export const TabBarVisibilityProvider: React.FC<TabBarVisibilityProviderProps> = ({ children }) => {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);

  return (
    <TabBarVisibilityContext.Provider value={{ isTabBarVisible, setIsTabBarVisible }}>
      {children}
    </TabBarVisibilityContext.Provider>
  );
};

export const useTabBarVisibility = (): TabBarVisibilityContextProps => {
  const context = useContext(TabBarVisibilityContext);
  if (!context) {
    throw new Error('useTabBarVisibility must be used within a TabBarVisibilityProvider');
  }
  return context;
};