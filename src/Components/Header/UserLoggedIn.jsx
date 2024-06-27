import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../data/dataSlice";
import { useNavigate } from "react-router-dom";

export function UserLoggedIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInformation = useSelector((state) => state.login.userProfil);
  const handleClick = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    dispatch(userLogOut());
    navigate("/");
  };
  return (
    <ul>
      <li
        className="header-nav-item"
        onClick={() => {
          navigate("/profile");
        }}
      >
        <i className="fa fa-user-circle"></i>
        {userInformation?.userName}
      </li>
      <li className="header-nav-item" onClick={() => handleClick()}>
        <i className="fa fa-sign-out"></i>
        Sign Out
      </li>
    </ul>
  );
}
