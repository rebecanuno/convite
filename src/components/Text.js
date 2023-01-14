import React from "react";

export const Text = (props) => {
  const { children, viewBox } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox={viewBox}>
      <foreignObject x="50%" y="50%" width="100%" height="100%">
        {children}
      </foreignObject>
    </svg>
  );
};
