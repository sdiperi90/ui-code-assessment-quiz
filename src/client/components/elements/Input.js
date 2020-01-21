import React from "react";
import styled from "styled-components";

const ScContainer = styled.div`
  background-color: "red";
`;

const ScInput = styled.input`
  margin: 0.4rem;
`;

export default function TextInput({ name, value }) {
  return (
    <ScContainer>
      <ScInput type="text" name={name} value={value} />
    </ScContainer>
  );
}
