import { createContext, useState, ReactNode, useEffect } from "react";

export type UserProfile = {
  username: string;
  avatar: string;
  progress: { [key: string]: string };
  attempts: { [key: string]: string };
  scores: { [key: string]: string };
};

interface AuthContextProps {
  userid: string;
  setUserIdHandler: (userid: string) => void;
  isSignedIn: boolean;
  signInContext: () => void;
  signOut: () => void;
  userProfile: UserProfile;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userid, setUserid] = useState("");
  const [userProfile, setUserProfile] = useState<UserProfile>({
    username: "",
    avatar: "",
    progress: {},
    attempts: {},
    scores: {},
  });

  const signInContext = () => {
    setIsSignedIn(true);
    localStorage.setItem("isSignedIn", JSON.stringify(true));
  };

  useEffect(() => {
    const storedUserProfile = localStorage.getItem("userProfile");
    const storedIsSignedIn = localStorage.getItem("isSignedIn");

    if (storedUserProfile && storedIsSignedIn) {
      setUserProfile(JSON.parse(storedUserProfile));
      setIsSignedIn(JSON.parse(storedIsSignedIn));
    }
  }, []);

  const setUserIdHandler = (userid: string) => {
    setUserid(userid);
    localStorage.setItem("userid", userid);
  };

  const signOut = () => {
    setUserProfile({ ...userProfile, username: "", avatar: "" });
    setIsSignedIn(false);
    localStorage.removeItem("userid");
    localStorage.removeItem("isSignedIn");
  };

  return (
    <AuthContext.Provider
      value={{ userid, setUserIdHandler, isSignedIn, signInContext, signOut, userProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
