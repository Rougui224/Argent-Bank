import { useNavigate } from "react-router-dom";
import "./style/Form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reduxUserLogIn } from "../../data/dataSlice";
export function Form() {
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, SetRememberMe] = useState(false);
  const url = "http://localhost:3001/api/v1/user/login";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      setError("Tous les champs sont requis");
    } else {
      setError("");
      const identifiant = {
        email: userName,
        password: password,
      };

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(identifiant),
      })
        .then((response) => response.json())
        .then((data) => {
          const messageError = data.message;
          if (messageError === "Error: User not found!") {
            setError(`L'email ne correspond pas`);
          } else if (messageError === `Error: Password is invalid`) {
            setError(`Le mot de passe ne correspond pas`);
          } else {
            const token = data.body.token;
            dispatch(reduxUserLogIn(token));
            rememberMe
              ? localStorage.setItem("token", JSON.stringify(token))
              : sessionStorage.setItem("token", JSON.stringify(token));
            navigate("/profile");
          }
        })
        .catch((error) =>
          alert(
            "Une erreur est survenue lors de la requête, veuillez réessayez plustard",
            error
          )
        );
    }
  };
  return (
    <main className="bg-dark ">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Email : </label>
            <input
              className={`${
                error === `L'email ne correspond pas` ? "red" : ""
              }`}
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password : </label>
            <input
              className={`${
                error === `Le mot de passe ne correspond pas` ? "red" : ""
              }`}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={() => {
                SetRememberMe((prev) => !prev);
                localStorage.removeItem("token");
              }}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <p className="error">{error}</p>}
          {/* <Link to={"/profile"} className="sign-in-button">
            Sign In
          </Link> */}
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
