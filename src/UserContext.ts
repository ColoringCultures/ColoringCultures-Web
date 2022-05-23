import { createContext } from 'react';

interface UserContextType {
  user: string;
  setUser: (user: string) => void;
  token: string;
  setToken: (token: string) => void;
}

export const UserContext = createContext({} as UserContextType);
