import "./styles/Header.css";
import argentBankLogo from "./../../img/argentBankLogo.webp";
import { UserLoggedIn } from "./UserLoggedIn";
import { UserLogin } from "./UserLogin";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reduxUserInfo } from "../../data/dataSlice";
import { useEffect } from "react";
export function Header() {
  const dispatch = useDispatch();
  const userInformation = useSelector((state) => state.login);
  const token = userInformation.userToken;

  useEffect(() => {
    if (token) {
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.body) {
            const informations = data.body;
            dispatch(reduxUserInfo(informations));
          }
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [token, dispatch]);

  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="header-nav-logo">
          <img
            loading="eager"
            decoding="async"
            className="header-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {userInformation.userProfil && token ? <UserLoggedIn /> : <UserLogin />}
      </nav>
    </header>
  );
}
