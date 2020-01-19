import React from "react";
import styled from "styled-components";

const ScSvg = styled.svg`
  width: ${({ width }) => (width ? width : "250px")};
  path,
  rect,
  polygon {
    fill: white;
  }
`;

export default function LucidLogo({ width }) {
  return (
    <ScSvg
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 375 113.6"
      xmlSpace="preserve"
    >
      <polygon points="0,25.9 0,77.8 30.5,77.8 30.5,68.1 11.1,68.1 11.1,25.9 "></polygon>{" "}
      <g>
        <g>
          <path
            d="M70.8,59.3V25.9h11.1v33.3c0,11.7-9.4,19.3-20,19.3S41.8,71,41.8,59.3V25.9H53v33.3c0.5,4.9,5,8.5,9.9,8
          C67.1,66.8,70.5,63.5,70.8,59.3"
          ></path>{" "}
          <path
            d="M142.9,67.2c-4.9,7.2-13.1,11.5-21.8,11.4c-14.8,0-26-12-26-26.5s11.2-26.6,26-26.6c8.6-0.2,16.7,4,21.6,11
          l-9,6.2c-2.8-4.2-7.6-6.8-12.6-6.8c-8.7,0-15,7.2-15,16.3s6.3,16.2,15,16.2c5.2-0.1,10.1-2.7,12.9-7.2L142.9,67.2z"
          ></path>{" "}
          <rect x="155.2" y="25.9" width="11" height="51.8"></rect>{" "}
          <path
            d="M182.9,77.8V25.9h20.3c14.9,0,23.4,11.3,23.4,26s-8.5,25.8-23.4,25.8L182.9,77.8z M193.9,67.8h9.3
          c8.3,0,12.4-7.3,12.4-15.8s-4.1-16-12.4-16h-9.3V67.8z"
          ></path>{" "}
          <path
            d="M355,20V0h-93.5v93.6h20v20H375V20H355z M281.5,88.4h-14.9V5.2h83.3V20h-68.4V88.4z M349.9,88.4h-63.3V25.1
          h63.3L349.9,88.4z M369.9,108.4h-83.3V93.6H355V25.1h14.9L369.9,108.4z"
          ></path>
        </g>
      </g>
    </ScSvg>
  );
}
