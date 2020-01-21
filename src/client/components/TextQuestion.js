import React from "react";
import { ScP } from "./elements/Text";
import { ScButton } from "./elements/Button";
import TextInput from "./elements/Input";
export default function TextQuestion() {
  return (
    <div>
      <ScP fontSize="20px">QUESTION</ScP>
      <TextInput />
      <ScButton>Next</ScButton>
    </div>
  );
}
