import { useEffect, useState } from "react";
import { ReactComponent as Invite } from "../assets/images/invite.svg";

export const Card = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const address = document.getElementById("address");
    if (address)
      address.addEventListener("mouseup", () =>
        navigator.clipboard.writeText("PEREIRAS DE QUARTEIRA, QUINTA DOS NETOS, 8125-024 QUARTEIRA")
      );

    setTimeout(() => {
      setOpened(true);
    }, 3600);
  }, []);

  return (
    <div className={`card-container ${opened ? "opened" : ""}`}>
      <div className="card">
        <Invite />
      </div>
    </div>
  );
};
