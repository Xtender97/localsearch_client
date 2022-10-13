import { WorkingHours } from "../../../types/business.types";

export interface IOpenHoursProps {
  hours?: WorkingHours[];
}

export function OpenHours({ hours }: IOpenHoursProps) {
  return (
    <div>
      {hours?.length ? (
        hours?.map((hour) => {
          return (
            <div>
              {hour.start} - {hour.end}
            </div>
          );
        })
      ) : (
        <div>Closed</div>
      )}
    </div>
  );
}
