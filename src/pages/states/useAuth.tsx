import { useRecoilState, useResetRecoilState } from "recoil";
import { signInUserState } from "./authState";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const useAuth = () => {
  const [signInUser, setSignInUser] = useRecoilState(signInUserState);
  const resetStatus = useResetRecoilState(signInUserState);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignInUser({
          uid: user.uid,
        });
      } else {
        resetStatus();
      }
    });
    return () => unSub();
  }, [setSignInUser, resetStatus]);

  return signInUser;
};
