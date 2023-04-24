import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert("サインイン認証に失敗しました。");
  }
};

export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("loginseikou");
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
