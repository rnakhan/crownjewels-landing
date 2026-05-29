"use client";

import { useEffect, useState, createContext, useContext } from "react";
import { signInAnonymously, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/app/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: any | null;
}

const FirebaseAuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
});

export const useFirebaseAuth = () => useContext(FirebaseAuthContext);

export default function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    // Listen to Auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setError(null);
        setLoading(false);
      } else {
        // Sign in anonymously silently if no user is signed in
        signInAnonymously(auth)
          .then((cred) => {
            setUser(cred.user);
            setError(null);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Firebase Anonymous Auth failed", err);
            setError(err);
            setLoading(false);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ user, loading, error }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}
