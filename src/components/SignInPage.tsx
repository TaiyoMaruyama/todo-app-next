import { Button } from "@mui/material";
import { useState } from "react";
import { signIn } from "@/pages/states/useAuth";
import { useRouter } from "next/router";

const SignInPage = () => {
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
    signIn(mail, password);
    router.push("/");
  };

  return (
    <>
      <div className="signup-form">
        <p>どうも！ログインしてください！</p>
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
            ログイン
          </Button>
        </div>
        <h4>
          <a href="/signup">新規登録はこちらから</a>
        </h4>
      </div>
    </>
  );
};

export default SignInPage;
