import { Button } from "@mui/material";
import { useState } from "react";
import { signUp } from "./states/authFunction";

const SignUpPage = () => {
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
  };

  return (
    <>
      <div className="signup-form">
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
            新規作成
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
