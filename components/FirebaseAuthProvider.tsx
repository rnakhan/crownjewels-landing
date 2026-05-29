"use client";

import { useEffect, useState, createContext, useContext } from "react";
import { signInAnonymously, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/app/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const FirebaseAuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const useFirebaseAuth = () => useContext(FirebaseAuthContext);

export default function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to Auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        // Sign in anonymously silently if no user is signed in
        signInAnonymously(auth)
          .then((cred) => {
            setUser(cred.user);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Firebase Anonymous Auth failed", error);
            setLoading(false);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{ user, loading }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}
