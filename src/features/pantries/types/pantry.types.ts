export type Weekday = "MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU";

export type NthInMonth = 1 | 2 | 3 | 4 | -1; // -1 = last

export type TimeRange = {
  start: string; // "09:30" 24-hour local time
  end: string; // "12:00"
};

export type ScheduleRule =
  | {
      kind: "weekly";
      byDay: Weekday[]; // ["WE"] or ["TU","TH"]
      times: TimeRange[]; // usually 1, but can be 2 blocks/day
    }
  | {
      kind: "monthly";
      byDay: Weekday; // "FR"
      nth: NthInMonth; // 1,2,3,4,-1
      times: TimeRange[];
    }
  | {
      kind: "one_off";
      dateISO: string; // "2026-02-10"
      times: TimeRange[];
    }
  | {
      kind: "unknown"; // escape hatch
    };

export type ServiceSchedule = {
  label?: string; // "Pantry", "Meals", "Market"
  rule: ScheduleRule; // machine-readable
  scheduleText: string; // human-readable (always keep)
  notes?: string; // "Line closes at 1:30" etc.
};

export type PantryEligibility =
  | { kind: "open_to_all" }
  | {
      kind: "zip_restricted";
      zipCodes: string[]; // keep as string for now; later you can narrow to CincinnatiZipCode
      needProofOfResidency: boolean;
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
  eligibility?: PantryEligibility;
  additionalServices?: string;
  website?: string;

  services: ServiceSchedule[]; // <-- replaces hours

  lgbtVetted: boolean;

  lat?: number;
  lng?: number;
};
