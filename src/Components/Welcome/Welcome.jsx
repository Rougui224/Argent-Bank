import { useSelector } from "react-redux";
import "./style/Welcome.css";
export function Welcome({ setEdit }) {
  const userInformation = useSelector(({ login }) => login.userProfil);
  return (
    <section className="welcomeSection">
      {userInformation && (
        <>
          <h1>
            Welcome back
            <br />
            {`${userInformation?.firstName} ${userInformation?.lastName}`}
          </h1>
          <button
            className="welcomeSection_editButton"
            onClick={() => setEdit(true)}
          >
            Edit Name
          </button>
        </>
      )}{" "}
    </section>
  );
}
