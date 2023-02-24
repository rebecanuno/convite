import { useEffect, useState, useRef } from "react";
import { Envelope, Login } from "./components";
import backgroundImg from "./assets/images/background.jpg";
import data from "./assets/data.json";
import "./styles/index.scss";

export const App = () => {
  const [isAuthenticate, setIsAuthenticated] = useState();
  const [user, setUser] = useState();

  const appRef = useRef();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (!user) {
      if (userToken !== null) {
        setTimeout(() => {
          const findUser = data.find((d) => d.id === userToken);
          if (findUser) setUser(findUser);
          else setIsAuthenticated(false);
        }, 100);
      } else setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
      localStorage.setItem("userToken", user.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      appRef.current.click();
    }, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App" ref={appRef}>
      <div className="background">
        <img src={backgroundImg} alt="" />
      </div>
      <div className="wrapper">
        {isAuthenticate ? <Envelope user={user} /> : isAuthenticate === false && <Login setUser={setUser} />}
      </div>
    </div>
  );
};
