import * as React from "react";
import { CgSpinnerAlt } from "react-icons/cg";
import "./Spinner.scss";

export function Spinner() {
  return (
    <div className="spinner">
      <CgSpinnerAlt />
    </div>
  );
}
