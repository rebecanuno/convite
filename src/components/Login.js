import { useRef, useState } from "react";
import { SHA256 } from "../utils/SHA256";
import data from "../assets/data.json";
import leaves from "../assets/images/leaves.png";
import { Loading } from "./Loading";

export const Login = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const compRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
      const encryptedValue = SHA256(value);
      setTimeout(() => {
        const encryptedUser = data.filter((item) => item.id === encryptedValue);
        if (encryptedUser.length > 0) {
          setLoading(false);
          leavingAnimation(encryptedUser[0]);
        } else {
          setError("Código inválido!");
          setLoading(false);
        }
      }, 1000);
    }, 300);
  };

  const leavingAnimation = (user) => {
    compRef.current.classList.add("leaving");
    setTimeout(() => {
      props.setUser(user);
    }, 1050);
  };

  return (
    <div className="login" ref={compRef}>
      <form className="login-form" onSubmit={handleClick}>
        <img className="login-image login-image-1" src={leaves} alt="" />
        <img className="login-image login-image-2" src={leaves} alt="" />
        <img className="login-image login-image-3" src={leaves} alt="" />
        <img className="login-image login-image-4" src={leaves} alt="" />
        <input
          placeholder="Inserir código..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
          type="number"
        />
        <button type="submit" onClick={handleClick}>
          {loading ? <Loading /> : <span>Entrar</span>}
        </button>
        <div className="login-form__error">{error}</div>
      </form>
    </div>
  );
};
