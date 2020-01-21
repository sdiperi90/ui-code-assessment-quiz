import React from "react";
import styled from "styled-components";

const ScContainer = styled.div`
  background-color: "red";
`;

const ScInput = styled.input`
  margin: 0.4rem;
`;

const ScLabel = styled.label`
  font: 1rem "Fira Sans", sans-serif;
`;

export default function RadioButton({ id, name, value, onChange }) {
  return (
    <ScContainer>
      <ScInput
        onChange={onChange}
        type="radio"
        id={id}
        name={name}
        value={value}
      />
      <ScLabel htmlFor={id} dangerouslySetInnerHTML={{ __html: value }} />
    </ScContainer>
  );
}
