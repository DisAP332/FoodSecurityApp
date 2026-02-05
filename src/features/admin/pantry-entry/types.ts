export type Weekday = "MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU";
export type NthInMonth = 1 | 2 | 3 | 4 | -1;

export type TimeRange = { start: string; end: string };

export type ScheduleRule =
  | { kind: "weekly"; byDay: Weekday[]; times: TimeRange[] }
  | { kind: "monthly"; byDay: Weekday; nth: NthInMonth; times: TimeRange[] }
  | { kind: "one_off"; dateISO: string; times: TimeRange[] }
  | { kind: "unknown" };

export type ServiceSchedule = {
  label?: string;
  rule: ScheduleRule;
  scheduleText: string;
  notes?: string;
};

export type Pantry = {
  id: string;
  name: string;

  addressLine: string;
  city: string;
  state: string;
  zip: string;
  neighborhood?: string;

  phone?: string;
  eligibility?: string;
  additionalServices?: string;
  website?: string;

  services: ServiceSchedule[];
  lgbtVetted: boolean;

  lat?: number;
  lng?: number;
};
