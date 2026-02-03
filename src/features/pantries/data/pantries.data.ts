import type { Pantry } from "../types/pantry.types";

export const PANTRIES: Pantry[] = [
  {
    id: "church-of-the-advent-open-door",
    name: "Church of the Advent Open Door Food Pantry",
    addressLine: "2366 Kemper Lane",
    city: "Cincinnati",
    state: "OH",
    zip: "45206",
    phone: "513-961-2100",
    eligibility: "Anyone facing food insecurity",
    additionalServices:
      "Fresh free produce; payee program; health and wellness support; aid accessing government programs",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["WE"],
          times: [
            {
              start: "09:30",
              end: "12:00",
            },
          ],
        },
        scheduleText: "Wednesdays from 9:30 a.m. to noon",
      },
    ],
    lgbtVetted: false,
    lat: 39.124514,
    lng: -84.487378,
  },
  {
    id: "our-daily-bread-soup-kitchen",
    name: "Our Daily Bread Soup Kitchen",
    addressLine: "1730 Race Street",
    city: "Cincinnati",
    state: "OH",
    zip: "45202",
    phone: "513-621-6364",
    eligibility: "Anyone facing food insecurity",
    additionalServices: "Social center and to-go meals",
    services: [
      {
        label: "Meals",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU", "WE", "TH", "FR"],
          times: [
            {
              start: "08:30",
              end: "11:45",
            },
          ],
        },
        scheduleText: "Monday through Friday 8:30 a.m. to 11:45 a.m.",
      },
    ],
    lgbtVetted: false,
    lat: 39.11526,
    lng: -84.517941,
  },
  {
    id: "queen-city-food-kitchen-choice-pantry",
    name: "Queen City Food Kitchen and Choice Pantry",
    addressLine: "2386 Kemper Lane",
    city: "Cincinnati",
    state: "OH",
    zip: "45206",
    phone: "513-961-1983",
    eligibility: "Anyone facing food insecurity",
    services: [
      {
        label: "Choice Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TU", "TH"],
          times: [
            {
              start: "12:00",
              end: "13:30",
            },
          ],
        },
        scheduleText: "Pantry: Tuesday and Thursday from noon to 1:30 p.m.",
      },
      {
        label: "Kitchen Meals",
        rule: {
          kind: "weekly",
          byDay: ["TU", "WE", "TH"],
          times: [
            {
              start: "12:30",
              end: "14:00",
            },
          ],
        },
        scheduleText:
          "Meals: Tuesday through Thursday from 12:30 p.m. to 2 p.m.",
      },
      {
        label: "Kitchen Meals",
        rule: {
          kind: "weekly",
          byDay: ["SA"],
          times: [
            {
              start: "12:00",
              end: "13:00",
            },
          ],
        },
        scheduleText: "Meals: Saturday from noon to 1:00 p.m.",
      },
      {
        label: "Kitchen Meals",
        rule: {
          kind: "weekly",
          byDay: ["SU"],
          times: [
            {
              start: "14:00",
              end: "15:00",
            },
          ],
        },
        scheduleText: "Meals: Sunday from 2 p.m. to 3 p.m.",
      },
    ],
    lgbtVetted: false,
    lat: 39.125355,
    lng: -84.48765,
  },
  {
    id: "st-george-food-pantry",
    name: "St. George Food Pantry",
    addressLine: "2554 Dennis Street",
    city: "Cincinnati",
    state: "OH",
    zip: "45219",
    neighborhood: "Clifton",
    phone: "513-751-8771",
    eligibility:
      "Residents of ZIP codes 45217, 45219, and 45220; and any military veterans in Hamilton County",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU"],
          times: [
            {
              start: "18:00",
              end: "19:30",
            },
          ],
        },
        scheduleText: "Monday and Tuesday from 6 p.m. to 7:30 p.m.",
      },
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "FR",
          nth: -1,
          times: [
            {
              start: "12:00",
              end: "13:30",
            },
          ],
        },
        scheduleText: "Last Friday of every month from noon to 1:30 p.m.",
      },
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "SA",
          nth: -1,
          times: [
            {
              start: "10:00",
              end: "11:30",
            },
          ],
        },
        scheduleText: "Last Saturday of every month from 10 a.m. to 11:30 a.m.",
      },
    ],
    lgbtVetted: false,
    lat: 39.12867,
    lng: -84.513589,
  },
  {
    id: "bethel-church-food-pantry",
    name: "Bethel Church Food Pantry",
    addressLine: "2712 Alms Place",
    city: "Cincinnati",
    state: "OH",
    zip: "45206",
    neighborhood: "Walnut Hills",
    phone: "513-961-0804",
    eligibility: "Anyone facing food insecurity",
    services: [
      {
        label: "Pantry (Seniors only)",
        rule: {
          kind: "monthly",
          byDay: "FR",
          nth: 1,
          times: [
            {
              start: "13:00",
              end: "15:00",
            },
          ],
        },
        scheduleText:
          "Seniors only — First Friday of each month from 1 p.m. to 3 p.m.",
      },
      {
        label: "Pantry (All households)",
        rule: {
          kind: "monthly",
          byDay: "FR",
          nth: 3,
          times: [
            {
              start: "13:00",
              end: "15:00",
            },
          ],
        },
        scheduleText:
          "All households — Third Friday of each month from 1 p.m. to 3 p.m.",
      },
    ],
    lgbtVetted: false,
    lat: 39.129169,
    lng: -84.483758,
  },
  {
    id: "cain-rainbow-choice-food-pantry",
    name: "CAIN Rainbow Choice Food Pantry",
    addressLine: "4230 Hamilton Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45223",
    neighborhood: "Northside",
    phone: "513-591-2246",
    eligibility: "Anyone facing food insecurity",
    additionalServices:
      "Choice pantry and other necessities such as household and hygiene items, baby diapers, and menstrual products (within CAIN’s service area)",
    services: [
      {
        label: "Choice Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO"],
          times: [
            {
              start: "16:30",
              end: "19:00",
            },
          ],
        },
        scheduleText: "Monday from 4:30 p.m. to 7 p.m.",
      },
      {
        label: "Choice Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TU", "TH"],
          times: [
            {
              start: "09:30",
              end: "13:00",
            },
          ],
        },
        scheduleText: "Tuesday and Thursday from 9:30 a.m. to 1 p.m.",
      },
    ],
    lgbtVetted: false,
    lat: 39.164465,
    lng: -84.540054,
  },
  {
    id: "table-of-hope-free-food-market",
    name: "Table of Hope Free Food Market",
    addressLine: "3707 Edgewood Dr.",
    city: "Cincinnati",
    state: "OH",
    zip: "45211",
    services: [
      {
        label: "Market",
        rule: {
          kind: "monthly",
          byDay: "SU",
          nth: 1,
          times: [
            {
              start: "12:30",
              end: "13:30",
            },
          ],
        },
        scheduleText:
          "First Sunday at 12:30 p.m. (line closes at 1:30 p.m.; serve everyone in line)",
        notes: "They close the line at 1:30 p.m. and serve everyone in line.",
      },
      {
        label: "Market",
        rule: {
          kind: "monthly",
          byDay: "SU",
          nth: 3,
          times: [
            {
              start: "12:30",
              end: "13:30",
            },
          ],
        },
        scheduleText:
          "Third Sunday at 12:30 p.m. (line closes at 1:30 p.m.; serve everyone in line)",
        notes: "They close the line at 1:30 p.m. and serve everyone in line.",
      },
    ],
    lgbtVetted: false,
    lat: 39.17811,
    lng: -84.60862,
  },
];
