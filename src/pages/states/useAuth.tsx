import { useRecoilState, useResetRecoilState } from "recoil";
import { signInUserState } from "./authState";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert("サインイン認証に失敗しました。");
  }
};

export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert("ユーザー登録に失敗しました。");
  }
};

export const signOut = async () => {
  try {
    await signOut();
  } catch (error) {
    alert("サインアウトに失敗しました。");
  }
};

export const useAuth = () => {
  const [signInUser, setSignInUser] = useRecoilState(signInUserState);
  const resetStatus = useResetRecoilState(signInUserState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignInUser({
          uid: user.email || "guest@mail.com",
        });
      } else {
        resetStatus();
      }
    });
  }, [setSignInUser, resetStatus, auth]);

  return signInUser;
};
