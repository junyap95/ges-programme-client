import { createContext, useState, ReactNode, useEffect } from "react";
import { fetchUserProfile } from "../helperFunctions";

export type UserProfile = {
  username: string;
  avatar: string;
  course: string[];
};

interface AuthContextProps {
  isSignedIn: boolean;
  signInContext: (userid: string) => void;
  signOut: () => void;
  userProfile: UserProfile;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    username: "",
    avatar: "",
    course: [],
  });

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
      const courseEnrolled = [];
      const { userData, userCourse } = data;
      const { literacy, numeracy } = userCourse;
      if (numeracy) courseEnrolled.push("Numeracy");
      if (literacy) courseEnrolled.push("Literacy");
      if (data) {
        setUserProfile({
          username: `${userData.first_name} ${userData.last_name}`,
          avatar: userData.avatar,
          course: courseEnrolled,
        });
        localStorage.setItem("userid", userid);
        localStorage.setItem(
          "userProfile",
          JSON.stringify({
            username: `${userData.first_name} ${userData.last_name}`,
            avatar: userData.avatar,
            course: courseEnrolled,
          })
        );
      }
    });
  };

  const signOut = () => {
    setUserProfile({ username: "", avatar: "", course: [] });
    setIsSignedIn(false);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, signInContext, signOut, userProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
