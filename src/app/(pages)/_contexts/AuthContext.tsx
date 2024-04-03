'use client';

import { onAuthStateChanged, User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

import { auth } from '@firebase/_utils/config';

export const AuthContext = createContext<{ user: User | null }>({ user: null });

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function unsubscribe() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
        setLoading(false);
      });
    }

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <></> : children}
    </AuthContext.Provider>
  );
}

export function withAuth(Component: React.FC) {
  function AuthComponent() {
    const { user } = useAuthContext();

    if (!user) {
      return <div>No credentials to access!</div>; // temp
    }

    return <Component />;
  }

  return AuthComponent;
}
