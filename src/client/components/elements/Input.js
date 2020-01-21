import React from "react";
import styled from "styled-components";



const ScInput = styled.input`
  border: 1px solid #dddddd;
  margin: 0.4rem;
  padding: 5px;
`;

export default function TextInput({ name, value, onChange }) {
  return (
    <div>
      <ScInput onChange={onChange} type="text" name={name} value={value} placeholder="Enter answer here" />
    </div>
  );
}
