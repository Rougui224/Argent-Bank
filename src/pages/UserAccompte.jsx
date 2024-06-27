import { useState } from "react";
import { Account } from "../Components/Account/Account";
import { Welcome } from "../Components/Welcome/Welcome";
import { EditUser } from "../Components/EditUser/EditUser";

export function UserAccompte() {
  const [edit, setEdit] = useState(false);
  return (
    <main className="bg-dark">
      {edit ? <EditUser setEdit={setEdit} /> : <Welcome setEdit={setEdit} />}

      <Account />
    </main>
  );
}
