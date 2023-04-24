import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Header = () => {
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
            <AccountCircleIcon />
            <p>testtest123@gmail.com</p>
          </div>
        </div>
      </header>
    </>
  );
};
