import * as React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./NextButton.scss";

export interface INextButtonProps {
  onClick: () => void;
}

export function NextButton({ onClick }: INextButtonProps) {
  return (
    <button className="next-button" onClick={onClick}>
      <AiOutlineRight className="next-button__icon" color="#61dafb" />
    </button>
  );
}
