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
  const [topBack, setTopBack] = useState(false);

  const handleEnvelopeClick = () => {
    if (reverse) {
      compRef.current.classList.remove("reverse");
      backRef.current.classList.remove("reverse");
      setTimeout(() => setReverse(false), 1000);
    } else setIsOpen(true);
  };

  useEffect(() => {
    const guestElement = document.getElementById("convidado");
    if (guestElement) guestElement.textContent = props.user.name;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isOpen) {
      window.addEventListener("mouseup", handleEnvelopeClick);
      return () => window.removeEventListener("mouseup", handleEnvelopeClick);
    } else {
      setTimeout(() => {
        setTopBack(true);
      }, 2500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reverse, isOpen]);

  useEffect(() => {
    if (topBack)
      setTimeout(() => {
        setTopBack(true);
      }, 1500);
  }, [topBack]);

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
        <div className={`envelope-wrapper ${topBack ? "envelope-wrapper--back" : ""}`}>
          <div className={`envelope-top ${topBack ? "envelope-top--back" : ""}`}>
            <img src={envelopeTop} alt="" />
          </div>
        </div>
        <div className="envelope-seal">
          <img src={Seal} alt="" />
        </div>
        {isOpen && <Card />}
      </div>
      <div className={`click-info ${isOpen ? "click-info--hidden" : ""}`}>
        <div>Clique para continuar!</div>
      </div>
    </div>
  );
};
