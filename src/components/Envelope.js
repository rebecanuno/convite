import React, { useState, useRef, useEffect } from "react";
import { Card } from "./Card";
import envelopeBack from "../assets/images/envelope-back.svg";
import envelopeBody from "../assets/images/envelope-body.svg";
import envelopeTop from "../assets/images/envelope-top.svg";
import Seal from "../assets/images/seal.svg";
import { ReactComponent as Backface } from "../assets/images/backface.svg";

export const Envelope = (props) => {
  const compRef = useRef(null);
  const backRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [reverse, setReverse] = useState(true);

  const handleEnvelopeClick = () => {
    if (reverse) {
      compRef.current.classList.remove("reverse");
      backRef.current.classList.remove("reverse");
      setTimeout(() => setReverse(false), 1000);
    } else setIsOpen(true);
  };

  useEffect(() => {
    const guestElement = document.getElementById("convidado").querySelector("tspan");
    if (guestElement) guestElement.innerHTML = props.user.name;

    const versElements = document.getElementById("versiculo").querySelectorAll("tspan");
    if (versElements) {
      versElements[0].innerHTML = '"Assim, eles já não são dois, mas sim uma';
      versElements[1].innerHTML = "só carne. Portanto, o que Deus uniu,";
      versElements[2].innerHTML = 'ninguém separe"';
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      window.addEventListener("mouseup", handleEnvelopeClick);
      return () => window.removeEventListener("mouseup", handleEnvelopeClick);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reverse, isOpen]);

  return (
    <div>
      <div className={`backface ${reverse ? "reverse" : ""}`} ref={backRef}>
        <Backface />
      </div>
      <div ref={compRef} className={`envelope ${reverse ? "reverse" : ""} ${isOpen ? "opened" : ""}`}>
        <div className="envelope-back">
          <img src={envelopeBack} alt="" />
        </div>
        <div className="envelope-body">
          <img src={envelopeBody} alt="" />
        </div>
        <div className="envelope-top">
          <img src={envelopeTop} alt="" />
        </div>
        <div className="envelope-seal">
          <img src={Seal} alt="" />
        </div>
        {isOpen && <Card />}
      </div>
      <div className="click-info">
        <div>Clique para continuar!</div>
      </div>
    </div>
  );
};
