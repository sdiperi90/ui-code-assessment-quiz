import React from "react";
import styled from "styled-components";
import LucidLogo from "./LucidLogo";

const ScHeader = styled.header`
  background-color: black;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  padding: 15px 25px;
`;

export default function Header() {
  return (
    <ScHeader data-test-id="header">
      <LucidLogo />
    </ScHeader>
  );
}
