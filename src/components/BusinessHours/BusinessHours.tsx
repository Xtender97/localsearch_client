import React from "react";
import { DailyHours } from "../../types/business.types";
import { OpenHours } from "./DailyHours/OpenHours";
import "./BusinessHours.scss";

export interface IBusinessHoursProps {
  openingHours?: {
    hours: DailyHours[];
    closed_on_holidays: boolean;
    open_by_arrangement: boolean;
  };
}

export function BusinessHours({ openingHours }: IBusinessHoursProps) {
  return (
    <div className="hours">
      <h2 className="hours__title">Opening Hours</h2>

      {openingHours?.hours.map((day) => {
        return (
          <div className="day">
            <div className="day__label">{day.day}</div>
            <OpenHours hours={day.workingHours}></OpenHours>
          </div>
        );
      })}
    </div>
  );
}
