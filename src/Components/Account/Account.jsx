import { AccountContent } from "./AccountContent";
import "./style/Account.css";
export function Account() {
  return (
    <>
      {" "}
      <h2 className="sr-only">Accounts</h2>
      <ul>
        <AccountContent
          title={"Argent Bank Checking (x8349)"}
          amount={"$2,082.79"}
          description={"Available Balance"}
        />
        <AccountContent
          title={"Argent Bank Savings (x6712)"}
          amount={"$10,928.42"}
          description={"account-amount-description"}
        />
        <AccountContent
          title={"Argent Bank Credit Card (x8349)"}
          amount={"$184.30"}
          description={"Current Balance"}
        />
      </ul>
    </>
  );
}
