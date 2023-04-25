import { Button } from "@mui/material";
import { useState } from "react";
import { signUp } from "@/pages/states/useAuth";
import { useRouter } from "next/router";

const SignUpPage = () => {
  const router = useRouter();
  const [mail, setMail] = useState("");
  const [password, setPaddword] = useState("");

  const handleChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaddword(e.target.value);
  };

  const handleLogin = () => {
    signUp(mail, password);
    router.push("/");
  };

  return (
    <>
      <div className="signup-form">
        <p>ようこそ! アカウントを作成してください!</p>
        <div>
          <input
            type="text"
            className="signin-input"
            value={mail}
            onChange={handleChangeMail}
          />
        </div>
        <div>
          <input
            type="password"
            className="signin-input"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className="signin-button">
          <Button variant="outlined" onClick={handleLogin}>
            サインアップ
          </Button>
        </div>
        <h4>
          <a href="/signin">サインインはこちらから</a>
        </h4>
      </div>
    </>
  );
};

export default SignUpPage;
