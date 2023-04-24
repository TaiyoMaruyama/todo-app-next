import { atom } from "recoil";

export const signInUserState = atom({
  key: "signInUserState",
  default: { uid: "" },
});
