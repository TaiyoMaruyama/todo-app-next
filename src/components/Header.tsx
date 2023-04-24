import Link from "next/link";
import { useRecoilValue } from "recoil";
import { signInUserState } from "@/pages/states/authState";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@mui/material";

export const Header = () => {
  const userInfo = useRecoilValue(signInUserState);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <>
      <header className="header">
        <div className="header-frame">
          <div className="header-left">
            <Link href={"/"} className="header-title">
              TODO APP
            </Link>
          </div>
          <div className="header-right">
            <p className="user-email">{userInfo.uid}</p>
            {userInfo.uid !== "" && (
              <Button variant="outlined" onClick={handleLogout}>
                ログアウト
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
