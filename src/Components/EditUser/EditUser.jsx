import { useSelector, useDispatch } from "react-redux";
import "./style/EditUser.css";
import { useState } from "react";
import { infoUserName } from "../../data/dataSlice";
export function EditUser({ setEdit }) {
  const userInformation = useSelector((state) => state.login);
  const userProfil = userInformation?.userProfil;
  const token = userInformation?.userToken;
  console.log(token);
  const [userName, setUserName] = useState(userProfil?.userName || "");
  const dispatch = useDispatch();
  const handleChangeUserName = async () => {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: userName }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEdit(false);
        console.log(data);
        dispatch(infoUserName(data.body.userName));
      })
      .catch((error) =>
        alert(
          "Une erreur est survenue lors de la soumission des données ",
          error
        )
      );
  };
  return (
    <section className="editUser">
      <h2 className="editUser-Title">Edit user info</h2>
      <form>
        <fieldset>
          <label htmlFor="name">User name: </label>
          <input
            type="text"
            id="name"
            name="name"
            className="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="firstName">First name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder={userProfil?.firstName}
            disabled
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName">Last name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder={userProfil?.lastName}
            disabled
          />
        </fieldset>
      </form>{" "}
      <button onClick={async (e) => handleChangeUserName(e)}>Save</button>
      <button onClick={() => setEdit(false)}>Cancel</button>
    </section>
  );
}
