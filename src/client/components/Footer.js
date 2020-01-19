import React from "react";
import styled from "styled-components";
import LucidLogo from "./LucidLogo";

const ScFooter = styled.footer`
  background-color: black;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
`;

export default function Footer() {
  return (
    <ScFooter data-test-id="footer">
      <LucidLogo width="120px" />
    </ScFooter>
  );
}
