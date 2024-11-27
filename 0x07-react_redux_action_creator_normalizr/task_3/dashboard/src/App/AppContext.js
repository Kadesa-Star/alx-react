import React, { useState } from 'react';

// Define the default user object
export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false
};

// Create the context
const AppContext = React.createContext({
  user: defaultUser, // Default context value
  logOut: () => {}    // Default logOut function
});

// Define the AppProvider component that will manage state
export const AppProvider = ({ children }) => {
  // Create state to manage the user object
  const [user, setUser] = useState(defaultUser);

  // LogOut function to reset the user object
  const logOut = () => {
    setUser(defaultUser); // Reset the user state when logging out
  };

  // Provide context with state and functions
  return (
    <AppContext.Provider value={{ user, logOut }}>
      {children}
    </AppContext.Provider>
  );
};

// Export the consumer for class components (optional)
export const AppConsumer = AppContext.Consumer;

// Export the context to be used in other components
export default AppContext;

