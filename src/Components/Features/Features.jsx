import "./style/Features.css";
import { Feature } from "./Feature";

import iconChat from "../../img/iconChat.png";
import iconMoney from "../../img/iconMoney.png";
import iconSecurity from "../../img/iconSecurity.png";
export function Features() {
  return (
    <section className="feature">
      <h2 className="sr-only">Features</h2>
      <Feature
        imgSrc={iconChat}
        alt={"Chat logo"}
        title={"You are our #1 priority"}
        paragraph={`  Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          `}
      />
      <Feature
        imgSrc={iconMoney}
        alt={"Money icon"}
        title={`More savings means higher rates`}
        paragraph={`  The more you save with us, the higher your interest rate will be!`}
      />
      <Feature
        imgSrc={iconSecurity}
        alt={"Security icon"}
        title={"Security you can trust"}
        paragraph={` We use top of the line encryption to make sure your data and money
            is always safe.`}
      />
    </section>
  );
}
