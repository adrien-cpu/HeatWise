"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { AlertTriangle } from 'lucide-react';
import { useTranslations } from 'next-intl';

/**
 * @interface AuthContextType
 * @description Type definition for the authentication context
 */
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  signup: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => { },
  signup: async () => { },
  logout: async () => { },
});

/**
 * @function AuthProvider
 * @description Provider component for authentication context
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const t = useTranslations('Auth');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    // Implementation of login using Firebase
    // This is a placeholder and should be replaced with the actual implementation
    throw new Error('Login functionality not implemented');
  };

  const signup = async (email: string, password: string) => {
    // Implementation of signup using Firebase
    // This is a placeholder and should be replaced with the actual implementation
    throw new Error('Signup functionality not implemented');
  };

  const logout = async () => {
    // Implementation of logout using Firebase
    // This is a placeholder and should be replaced with the actual implementation
    throw new Error('Logout functionality not implemented');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * @function useAuth
 * @description Custom hook to use the authentication context
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}

/**
 * @function useAuthContext
 * @description Alias for useAuth to maintain compatibility
 */
export const useAuthContext = useAuth;
