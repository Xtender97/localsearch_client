import * as React from "react";
import "./Error.scss";

export interface IErrorProps {
  text?: string;
}

export function Error({ text }: IErrorProps) {
  return (
    <span className="error">{text || "Ups. Somethign went wrong..."}</span>
  );
}
