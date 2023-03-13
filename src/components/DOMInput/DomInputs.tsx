import React from "react";
import { DomInput } from "./DomInput";
interface Props {
  inputs: { name: string; id: string; value: string }[];
}
export const DomInputs = ({ inputs }: Props) => {
  return (
    <table>
      <th>Found {inputs.length} Inputs</th>

      {inputs.map((input) => (
        <DomInput key={input.id} input={input} />
      ))}
    </table>
  );
};
