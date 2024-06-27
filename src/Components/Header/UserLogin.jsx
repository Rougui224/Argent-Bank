import { Link } from "react-router-dom";

export function UserLogin() {
  return (
    <Link to={"/login"} className="header-nav-item">
      <i className="fa fa-user-circle"></i>
      Sign In
    </Link>
  );
}
