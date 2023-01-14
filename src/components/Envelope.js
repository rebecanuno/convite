import React, { useState, useRef, useEffect } from "react";
import { Card } from "./Card";
import { Text } from "./Text";
import envelopeBack from "../assets/images/envelope-back.svg";
import envelopeBody from "../assets/images/envelope-body.svg";
import envelopeTop from "../assets/images/envelope-top.svg";
import Seal from "../assets/images/seal.svg";
import leaves from "../assets/images/leaves.png";

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
    if (!isOpen) {
      window.addEventListener("mouseup", handleEnvelopeClick);
      return () => window.removeEventListener("mouseup", handleEnvelopeClick);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reverse, isOpen]);

  return (
    <div>
      <div className={`backface ${reverse ? "reverse" : ""}`} ref={backRef}>
        <img src={envelopeBack} alt="" />
        <div className="guest">
          <Text viewBox="0 0 600 60" h={"10%"}>
            <div className="backface-top">Convite de casamento</div>
          </Text>
          <Text viewBox="0 0 275 60">
            <div className="handwrite">
              <div>
                <div className="guest-name">{props.user.name}</div>
                <div className="versiculo">
                  "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe"
                </div>
                <div className="referencia">Mateus 19.6</div>
              </div>
              <div>
                <img src={leaves} alt="" />
              </div>
            </div>
          </Text>
        </div>
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
    </div>
  );
};
