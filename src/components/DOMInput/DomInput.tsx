import React from "react";
interface Props {
  input: { name: string; id: string; value: string };
}
export const DomInput = ({ input }: Props) => {
  return (
    <tr>
      <td>Name - {JSON.stringify(input)}</td>
      <td>{input.value}</td>
    </tr>
  );
};
