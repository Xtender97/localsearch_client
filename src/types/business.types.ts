export interface Business {
  displayed_what: string;
  displayed_where: string;
  opening_hours: {
    hours: DailyHours[];
    closed_on_holidays: boolean;
    open_by_arrangement: boolean;
  };
}

export interface DailyHours {
  day: string;
  workingHours: WorkingHours[];
}

export interface WorkingHours {
  start: string;
  end: string;
  type: string;
}
