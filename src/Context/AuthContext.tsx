import { createContext, useState, ReactNode, useEffect, Dispatch, SetStateAction } from "react";
import { fetchUserProfile } from "../utils/network-functions";
import { MapTopic, Topic } from "../utils/type-constants";

export type UserProfile = {
  username: string;
  avatar: string;
  course: string[];
  attempts: Record<string, Record<string, number>>;
  progress: Record<string, Record<string, (Date | null)[]>>;
  scores: Record<string, Record<string, number[]>>;
};

interface AuthContextProps {
  isSignedIn: boolean;
  signInContext: (userid: string) => void;
  signOut: () => void;
  userProfile: UserProfile;
  currTopic: MapTopic;
  setCurrTopic: Dispatch<SetStateAction<MapTopic>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    username: "",
    avatar: "",
    course: [],
    attempts: {},
    progress: {},
    scores: {},
  });
  const [currTopic, setCurrTopic] = useState<MapTopic>(Topic.NUMERACY);

  useEffect(() => {
    const storedUserProfile = localStorage.getItem("userProfile");
    const storedIsSignedIn = localStorage.getItem("isSignedIn");

    if (storedUserProfile && storedIsSignedIn) {
      setUserProfile(JSON.parse(storedUserProfile));
      setIsSignedIn(JSON.parse(storedIsSignedIn));
    }
  }, []);

  const signInContext = (userid: string) => {
    setIsSignedIn(true);
    localStorage.setItem("isSignedIn", JSON.stringify(true));

    fetchUserProfile(userid).then((data) => {
      console.log("login data", data);

      const userProfile = {
        username: `${data.first_name} ${data.last_name}`,
        avatar: data.avatar,
        course: data.courses,
        attempts: data.attempts,
        progress: data.progress,
        scores: data.scores,
      };

      if (data) {
        setUserProfile(userProfile);
        localStorage.setItem("userid", userid);
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
      }
    });
  };

  const signOut = () => {
    setUserProfile({
      username: "",
      avatar: "",
      course: [],
      attempts: {},
      progress: {},
      scores: {},
    });
    setIsSignedIn(false);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ isSignedIn, signInContext, signOut, userProfile, currTopic, setCurrTopic }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
