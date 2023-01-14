import { useEffect, useState } from "react";
import { Envelope, Login } from "./components";
import backgroundImg from "./assets/images/background.jpg";
import data from "./assets/data.json";
import { SHA256 } from "./utils/SHA256";
import "./styles/index.scss";

export const App = () => {
  const [isAuthenticate, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();

  console.log(SHA256("256552"));

  useEffect(() => {
    // const userToken = localStorage.getItem("userToken");
    const userToken = null;
    if (!user) {
      if (userToken !== null) setUser(data.filter((d) => d.id === userToken)[0]);
    } else {
      setIsAuthenticated(true);
      if (userToken === null) localStorage.setItem("userToken", user.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="App">
      <div className="background">
        <img src={backgroundImg} alt="" />
      </div>
      <div className="wrapper">{isAuthenticate ? <Envelope user={user} /> : <Login setUser={setUser} />}</div>
    </div>
  );
};
