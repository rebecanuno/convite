import React, { useEffect, useState } from "react";
import { Text } from "./";
import leaves from "../assets/images/leaves.png";
import polygon from "../assets/images/polygon.svg";

export const Card = () => {
  const [copyText, setCopyText] = useState("click");
  const [word3Anim, setWord3Anim] = useState(false);
  const [word4Anim, setWord4Anim] = useState(false);

  const clickHandler = () => {
    setCopyText("clicked");
  };

  const leaveHandler = () => {
    setCopyText("click");
  };

  useEffect(() => {
    const addressElement = document.querySelector(".card-content__bottom-address");
    addressElement.addEventListener("click", clickHandler);
    addressElement.addEventListener("mouseleave", leaveHandler);

    return () => {
      addressElement.removeEventListener("click", clickHandler);
      addressElement.addEventListener("mouseleave", leaveHandler);
    };
  }, [copyText]);

  const jumpAnimation = (evt) => {
    const isWord3 = evt.target.classList.contains("word3");
    if (isWord3) setWord3Anim(true);
    else setWord4Anim(true);

    const spanElements = evt.target.querySelectorAll("span");

    for (let i = 0; i < spanElements.length; i++) {
      setTimeout(() => {
        spanElements[i].classList.add("active");
        setTimeout(() => {
          spanElements[i].classList.remove("active");
          if (i === spanElements.length - 1) {
            if (isWord3) setWord3Anim(false);
            else setWord4Anim(false);
          }
        }, 500);
      }, i * 20);
    }
  };

  useEffect(() => {
    if (!word3Anim) {
      const word3 = document.querySelector(".word3");

      word3.addEventListener("mouseup", jumpAnimation);
      word3.addEventListener("mouseover", jumpAnimation);

      return () => {
        word3.removeEventListener("mouseup", jumpAnimation);
        word3.removeEventListener("mouseover", jumpAnimation);
      };
    }
  }, [word3Anim]);

  useEffect(() => {
    if (!word4Anim) {
      const word4 = document.querySelector(".word4");

      word4.addEventListener("mouseup", jumpAnimation);
      word4.addEventListener("mouseover", jumpAnimation);

      return () => {
        word4.removeEventListener("mouseup", jumpAnimation);
        word4.removeEventListener("mouseover", jumpAnimation);
      };
    }
  }, [word4Anim]);
  return (
    <div className="card-container">
      <div className="card">
        <img className="card-image card-image-1" src={leaves} alt="" />
        <img className="card-image card-image-2" src={leaves} alt="" />
        <img className="card-image card-image-3" src={leaves} alt="" />
        <img className="card-image card-image-4" src={leaves} alt="" />
        <div className="card-border"></div>
        <div className="card-content">
          <div className="card-content__header">
            <Text viewBox="0 0 250 18">
              <div className="t-center rebeca">
                REBECA VARGUES
                <img className="bg-polygon bg-polygon-1" src={polygon} />
              </div>
            </Text>
            <Text viewBox="0 0 250 18">
              <div className="t-center">&</div>
            </Text>
            <Text viewBox="0 0 250 18">
              <div className="t-center nuno">
                NUNO PIRES
                <img className="bg-polygon bg-polygon-2" src={polygon} />
              </div>
            </Text>
          </div>
          <div className="card-content__invite">
            <Text viewBox="0 0 550 20">
              <div className="t-center t-light ls-2 word3">
                {"CONVIDAM PARA CELEBRAR O SEU CASAMENTO, NO DIA".split("").map((char, index) => {
                  return <span key={index}>{char}</span>;
                })}
              </div>
            </Text>
          </div>
          <div className="card-content__body">
            <div className="card-content__body-side">
              <Text viewBox="0 0 110 23">
                <div className="t-center word1">
                  {"QUINTA-FEIRA".split("").map((char, index) => {
                    return <span key={index}>{char}</span>;
                  })}
                </div>
              </Text>
            </div>
            <div className="card-content__body-center">
              <Text viewBox="0 0 100 20">
                <div className="t-center t-semibold">JUNHO</div>
              </Text>
              <Text viewBox="0 0 30 20">
                <div className="t-center t-bolder">8</div>
              </Text>
              <Text viewBox="0 0 80 20">
                <div className="t-center t-semibold">2023</div>
              </Text>
            </div>
            <div className="card-content__body-side">
              <Text viewBox="0 0 100 21">
                <div className="t-center word2">
                  {"PELAS 14:30H".split("").map((char, index) => {
                    return <span key={index}>{char}</span>;
                  })}
                </div>
              </Text>
            </div>
          </div>
          <div className="card-content__bottom">
            <div className="card-content__bottom-address">
              <Text viewBox="0 0 250 60">
                <div
                  className={`t-center t-light ${copyText}`}
                  onClick={() => navigator.clipboard.writeText("PEREIRAS DE QUARTEIRA, QUINTA DOS NETOS, 8125-024 QUARTEIRA")}
                >
                  PEREIRAS DE QUARTEIRA, QUINTA DOS NETOS, 8125-024 QUARTEIRA
                </div>
              </Text>
            </div>
            <div className="card-content__bottom-presence">
              <Text viewBox="0 0 480 20">
                <div className="t-center t-light ls-2 word4">
                  {"CONFIRME A SUA PRESENÇA ATÉ ".split("").map((char, index) => {
                    return <span key={index}>{char}</span>;
                  })}
                  {"08/04/2023".split("").map((char, index) => {
                    return (
                      <span key={index}>
                        <strong>{char}</strong>
                      </span>
                    );
                  })}
                </div>
              </Text>
            </div>
            <div className="card-content__bottom-contacts">
              <div className="card-content__bottom-contact">
                <Text viewBox="0 0 250 20">
                  <a href="tel:912255646">
                    <div className="t-center t-light">
                      <strong>Noivo:</strong> 912 255 646
                    </div>
                  </a>
                </Text>
              </div>
              <div className="card-content__bottom-contact">
                <Text viewBox="0 0 250 20">
                  <div className="t-center t-light">
                    <a href="tel:963224225">
                      <strong>Noiva:</strong> 963 224 225
                    </a>
                  </div>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
