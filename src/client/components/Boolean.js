import React from "react";
import RadioButton from "./elements/RadioButton";
import { ScP } from "./elements/Text";
import { ScButton } from "./elements/Button";

export default function Boolean() {
  return (
    <div>
      <ScP fontSize="20px">QUESTION</ScP>
      <form>
        <RadioButton id="1" name="boolean" value={"True"} />
        <RadioButton id="2" name="boolean" value={"False"} />
        <ScButton type="submit">Next</ScButton>
      </form>
    </div>
  );
}
