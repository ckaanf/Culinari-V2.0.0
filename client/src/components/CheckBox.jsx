import styled from "styled-components";
import { ReactComponent as CheckBoxIcon } from "../assets/check-box-icon.svg";

const Label = styled.label`
  margin-right: 12px;
  cursor: pointer;

  svg {
    width: ${({ size }) => size};
    height: ${({ size }) => size};

    g {
      fill: ${({ isChecked }) => (isChecked ? "#783CB7" : "none")};
      stroke: ${({ isChecked }) => (isChecked ? "#ffffff" : "#DDD")};
    }

    circle {
      stroke: ${({ isChecked }) => (isChecked ? "#783CB7" : "#DDD")};
    }
  }
`;

function CheckBox({ isChecked, size = "35px", onClick }) {
  
  return (
    <>
      <Label isChecked={isChecked} size={size} onClick={onClick}>
        <CheckBoxIcon></CheckBoxIcon>
      </Label>
    </>
  );
}

export default CheckBox;
