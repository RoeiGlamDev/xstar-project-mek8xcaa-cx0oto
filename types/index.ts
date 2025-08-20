import { createContext, useContext } from 'react';

// Define types for the context
interface GlamCSContextType {
  // Define properties and methods for the context
  theme: string; // e.g., 'light' | 'dark'
  setTheme: (theme: string) => void;
}

// Create context
const GlamCSContext = createContext<GlamCSContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useGlamCS = () => {
  const context = useContext(GlamCSContext);
  if (context === undefined) {
    throw new Error('useGlamCS must be used within a GlamCSProvider');
  }
  return context;
};

// Export context and provider
export const GlamCSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<string>('light'); // Default theme

  return (
    <GlamCSContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlamCSContext.Provider>
  );
};

export default GlamCSContext;