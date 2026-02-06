import type { Pantry } from "../types/pantry.types";

export const PANTRIES: Pantry[] = [
  {
    id: "pantry_26d2e8fd-7464-4246-b1dc-3358438a70d9",
    name: "Church of the Advent",
    addressLine: "2366 Kemper Lane",
    city: "Cincinnati",
    state: "OH",
    zip: "45206",
    neighborhood: "",
    phone: "513-961-2100",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices:
      "Fresh free produce Also provides a payee program, health and wellness support, and aid in accessing government programs.",
    website: "https://www.adventcincy.org/",
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
        scheduleText: " Wednesdays from 9:30 a.m. to noon",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_c4e0d127-9546-4988-b188-df1cc6c1a5de",
    name: "Mercy Neighborhood Ministries",
    addressLine: "1602 Madison Road",
    city: "Cincinnatii",
    state: "OH",
    zip: "45206",
    neighborhood: "East Walnut Hills",
    phone: "513-751-2500",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45206", "45207", "45212"],
      needProofOfResidency: true,
    },
    additionalServices:
      "provides senior supportive services, home health care services, and more.",
    website: "https://mercyneighborhoodministries.org/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU", "WE"],
          times: [
            {
              start: "09:00",
              end: "11:30",
            },
          ],
        },
        scheduleText: "Monday through Wednesday from 9 a.m. to 11:30 a.m",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_1729db64-1ca4-4b9f-a164-668a3d3bda61",
    name: "Queen City Food Kitchen and Choice Pantry",
    addressLine: "2386 Kemper Lane",
    city: "Cincinnati",
    state: "OH",
    zip: "45206",
    neighborhood: "Walnut Hills",
    phone: "513-961-1983",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://www.queencitykitchen.org/",
    services: [
      {
        label: "Pantry",
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
        scheduleText: "Tuesday and Thursday from noon to 1:30pm ",
        notes: "",
      },
      {
        label: "Kitchen Meals",
        rule: {
          kind: "weekly",
          byDay: ["TU", "TH"],
          times: [
            {
              start: "12:30",
              end: "14:00",
            },
          ],
        },
        scheduleText:
          "Tuesday through Thursday from 12:30 p.m. to 2 p.m., Saturday from noon to 1:00 p.m., and Sunday from 2 p.m. to 3 p.m.",
        notes: "",
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
        scheduleText:
          "Tuesday through Thursday from 12:30 p.m. to 2 p.m., Saturday from noon to 1:00 p.m., and Sunday from 2 p.m. to 3 p.m.",
        notes: "",
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
        scheduleText:
          "Tuesday through Thursday from 12:30 p.m. to 2 p.m., Saturday from noon to 1:00 p.m., and Sunday from 2 p.m. to 3 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: true,
  },
  {
    id: "pantry_889b4440-03fc-4019-926e-13a2a0c870f5",
    name: "St. Andrew’s Episcopal Church Choice Food Pantry",
    addressLine: "1809 Rutland Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45207",
    neighborhood: "Evanston",
    phone: "513-531-4337",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "Provides clothing and hygiene items",
    website: "https://www.standrewscincinnati.org/st-andrews-pantry",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU"],
          times: [
            {
              start: "13:00",
              end: "14:00",
            },
          ],
        },
        scheduleText: "Mondays and Tuesdays from 1 p.m to 2 p.m",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_10933deb-abf6-48fc-9982-235136d888b2",
    name: "St. Francis Seraph Ministries",
    addressLine: "1615 Republic Street",
    city: "Cincinnati",
    state: "OH",
    zip: "45202",
    neighborhood: "Over-the-Rhine",
    phone: "513-549-0542",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "Bag lunches and hot lunches!",
    website: "",
    services: [
      {
        label: "Dining Room / Bag Lunch",
        rule: {
          kind: "weekly",
          byDay: ["TU", "WE", "TH", "FR"],
          times: [
            {
              start: "07:30",
              end: "08:30",
            },
            {
              start: "16:30",
              end: "17:00",
            },
          ],
        },
        scheduleText:
          "Dining Room: Monday through Friday from 7:30 a.m. to 8:30 a.m. and 4:30 p.m. to 5:30 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_70626a81-aabe-4a61-96d9-fa922a519329",
    name: "St. George Food Pantry ",
    addressLine: "2554 Dennis Street",
    city: "Cincinnati",
    state: "OH",
    zip: "45219",
    neighborhood: "Clifton",
    phone: "513-751-8771",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45217", "45219", "45220"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://www.stgeorgefoodpantry.com/",
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
        scheduleText: "Monday and Tuesday, from 6 p.m. to 7:30 p.m.",
        notes: "",
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
        scheduleText: "Last Friday of the Month 12 to 1:30PM",
        notes: "",
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
        scheduleText: "Last Saturday of month 10 am to 11:30 AM",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_06cc1b6e-c7fb-48f6-960e-013bf36b6f0d",
    name: "Ted and Becky Catino Choice Food Pantry ",
    addressLine: "1125 Bank Street",
    city: "Cincinnati",
    state: "OH",
    zip: "45214",
    neighborhood: "West End",
    phone: "513-521-0602",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://www.svdpcincinnati.org/food-assistance/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU", "WE", "TH", "FR"],
          times: [
            {
              start: "08:00",
              end: "16:00",
            },
          ],
        },
        scheduleText: "Monday through Friday from 8 am to 4 pm",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["SA"],
          times: [
            {
              start: "08:00",
              end: "12:00",
            },
          ],
        },
        scheduleText: "Saturdays 8am to noon",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_1129f4a6-c346-49ea-a497-574b3af1072b",
    name: "Bethel Church Food Pantry ",
    addressLine: "2712 Alms Place",
    city: "Cincinnati",
    state: "OH",
    zip: "45206",
    neighborhood: "Walnut Hills",
    phone: "513-961-0804",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://www.ourcommunityresources.org/food-pantries",
    services: [
      {
        label: "Seniors ONLY pantry",
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
        scheduleText: "First Friday of the month 1pm to 3pm",
        notes: "",
      },
      {
        label: "Pantry",
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
        scheduleText: "Every third friday of the month 1pm to 3pm",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_2d1a60c2-95c8-4199-994b-dcb941ae38e5",
    name: "Food for All Program at St. Joseph Church ",
    addressLine: "745 Ezzard Charles Drive",
    city: "Cincinnati",
    state: "OH",
    zip: "45203",
    neighborhood: "West End",
    phone: "513-241-7745",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://www.ccswoh.org/food-for-all/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "TU",
          nth: 2,
          times: [
            {
              start: "11:00",
              end: "13:00",
            },
          ],
        },
        scheduleText: "Every 2nd tuesday of the month 11am to 1pm",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_f7eb1f4d-5996-4ade-ab9c-41a6ec39c28b",
    name: "Liberty Street Market by Freestore Foodbank",
    addressLine: "112 E Liberty Street",
    city: "Cincinnati",
    state: "OH",
    zip: "45202",
    neighborhood: "Over-the-Rhine",
    phone: "513-241-1064",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://freestorefoodbank.org/liberty-street-market/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU", "WE", "TH", "FR"],
          times: [
            {
              start: "08:00",
              end: "16:00",
            },
          ],
        },
        scheduleText: "Monday through Friday 8am to 4pm",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_53cfac3b-bd70-4625-9e66-f08bd7988412",
    name: "Anderson Ferry Church of Christ Food Pantry ",
    addressLine: "380 Greenwell Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45238",
    neighborhood: "Delhi Township",
    phone: "513-832-4200",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: [
        "45001",
        "45002",
        "45030",
        "45033",
        "45041",
        "45052",
        "45204",
        "45211",
        "45233",
        "45238",
        "45247",
        "45248",
      ],
      needProofOfResidency: false,
    },
    additionalServices: "",
    website: "https://afcofc.churchtrac.com/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU", "WE", "TH"],
          times: [
            {
              start: "10:00",
              end: "12:00",
            },
          ],
        },
        scheduleText: "Mondays and Thursdays from 10 a.m. to noon",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_009904c5-e0f0-4711-b77c-bca2d79c20c4",
    name: "CAIN Rainbow Choice Food Pantry ",
    addressLine: "4230 Hamilton Avenue,",
    city: "Cincinnati",
    state: "OH",
    zip: "45223",
    neighborhood: "Northside",
    phone: "513-591-2246",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://caincincy.org/themarket/",
    services: [
      {
        label: "Pantry",
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
        scheduleText: "Monday from 4:30 p.m. to 7 p.m.; ",
        notes: "",
      },
      {
        label: "Pantry",
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
        notes: "",
      },
    ],
    lgbtVetted: true,
  },
  {
    id: "pantry_0e388bbe-dd88-48ca-b558-3567a1d3ca80",
    name: "St. Leo Food Pantry",
    addressLine: "2573 St Leo Place",
    city: "Cincinnati",
    state: "OH",
    zip: "45225",
    neighborhood: "North Fairmount",
    phone: "513-921-1044",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45214", "45225"],
      needProofOfResidency: false,
    },
    additionalServices: "",
    website: "https://www.saint-leo.org/Food-Pantry",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "WE", "FR"],
          times: [
            {
              start: "13:00",
              end: "15:30",
            },
          ],
        },
        scheduleText:
          "Monday, Wednesday, and Friday from 1 p.m. to 3:30 p.m. Residents may visit once every 30 days.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_d864b0a0-297f-4dbd-addb-f98e3ddb0e15",
    name: "St. Therese Little Flower Food Pantry",
    addressLine: "5560 Kirby Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45239",
    neighborhood: "Mt. Airy",
    phone: "513-541-5560",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45239"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://www.littleflower-church.org/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TU"],
          times: [
            {
              start: "13:30",
              end: "14:30",
            },
          ],
        },
        scheduleText: "Tuesday from 1:30 p.m. to 2:30 p.m. ",
        notes: "",
      },
      {
        label: "Meals",
        rule: {
          kind: "weekly",
          byDay: ["TU"],
          times: [
            {
              start: "18:30",
              end: "19:30",
            },
          ],
        },
        scheduleText: "Meals: Tuesday from 6:30 p.m. to 7:30 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_d8ea0d50-d0ee-4e48-a0d8-f8b33c3fb32d",
    name: "Westfed Food Pantry ",
    addressLine: "3628 Boudinot Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45211",
    neighborhood: "Cheviot",
    phone: "513-661-5166",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45211", "45238"],
      needProofOfResidency: false,
    },
    additionalServices: "",
    website: "https://www.foodpantries.org/li/westfed_food_pantry_45211",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "TH",
          nth: 3,
          times: [
            {
              start: "13:30",
              end: "14:30",
            },
          ],
        },
        scheduleText: "Last two Thursdays of the month 1:30 to 2:30pm",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "TH",
          nth: 4,
          times: [
            {
              start: "13:30",
              end: "14:30",
            },
          ],
        },
        scheduleText: "Last two Thursdays of the month 1:30 to 2:30pm",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_b3867a24-dfce-492e-99e5-b700fcd12600",
    name: "Table of Hope Free Food Market ",
    addressLine: "3707 Edgewood Dr",
    city: "Cincinnati",
    state: "OH",
    zip: "45211",
    neighborhood: "",
    phone: " (513) 661-2428",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website:
      "https://www.newhopecincinnati.com/table-of-hope-meal-market-ministry",
    services: [
      {
        label: "Pantry",
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
        scheduleText: "Open the first and third Sunday at 12:30 to 1:30",
        notes: "They close the line at 1:30 and serve everyone in line",
      },
      {
        label: "Pantry",
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
        scheduleText: "Open the first and third Sunday at 12:30 to 1:30",
        notes: "They close the line at 1:30 and serve everyone in line",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_2c8ded04-a871-450d-a99a-71735bf52f89",
    name: "For His Glory Pantry ",
    addressLine: "921 McPherson Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45205",
    neighborhood: "Price Hill",
    phone: "513-250-5722",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45204", "45205", "45238"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://www.onebloc.org/for-his-glory",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TH"],
          times: [
            {
              start: "11:00",
              end: "12:30",
            },
          ],
        },
        scheduleText: "Thursday 11 a.m. – 12:30 p.m. ",
        notes:
          "Price Hill residents receive a three-day food supply once per month; ",
      },
      {
        label: "Meal",
        rule: {
          kind: "weekly",
          byDay: ["WE"],
          times: [
            {
              start: "10:00",
              end: "11:00",
            },
          ],
        },
        scheduleText: "Wednesday at 10 a.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_1356684e-894e-453d-81c4-88e9eab4a599",
    name: "Cincinnati Islamic Community Center Food Pantry",
    addressLine: "2570 Gobel Court",
    city: "Cincinnati",
    state: "OH",
    zip: "45211",
    neighborhood: "WestWood",
    phone: "513-503-2422",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45211", "45225"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://icgc.us/food-pantry/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "FR",
          nth: 1,
          times: [
            {
              start: "09:00",
              end: "13:00",
            },
          ],
        },
        scheduleText:
          "First and third Saturday of each month, from 9 a.m. to 1:00 p.m.",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "FR",
          nth: 3,
          times: [
            {
              start: "09:00",
              end: "13:00",
            },
          ],
        },
        scheduleText:
          "First and third Saturday of each month, from 9 a.m. to 1:00 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_624837a4-4484-48e3-a61d-09e0884512ab",
    name: "Cincinnati Urban Promise ",
    addressLine: "2420 Harrison Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45211",
    neighborhood: "Westwood",
    phone: "513-972-4777",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45211"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://www.cincinnatiurbanpromise.org/support-services",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO"],
          times: [
            {
              start: "09:00",
              end: "11:00",
            },
          ],
        },
        scheduleText: "Mondays from 9a.m to 11 a.m",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_64149eea-89da-41c3-95fb-aaead141c1ad",
    name: "Community Matters ",
    addressLine: "2104 St Michael Street",
    city: "Cincinnati",
    state: "OH",
    zip: "45204",
    neighborhood: "East Price Hill",
    phone: "513-244-2214",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45204"],
      needProofOfResidency: true,
    },
    additionalServices:
      "Open to all currently enrolled students of the Education Forward Program",
    website:
      "https://cmcincy.org/programs/family-sustainability/community-market/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TU", "TH"],
          times: [
            {
              start: "10:00",
              end: "14:00",
            },
          ],
        },
        scheduleText: "Tuesdays and Thursdays from 10 a.m to 2 p.m",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_c02d2cca-8589-4bce-8192-dc58887229aa",
    name: "Eden Chapel Food Pantry ",
    addressLine: "150 Dahlia Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45233",
    neighborhood: "Saylor Park",
    phone: "513-941-4183",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45233"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website:
      "https://www.saylerpark.org/edward-j-eiding-food-pantry-at-eden-chapel",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "WE",
          nth: 2,
          times: [
            {
              start: "12:00",
              end: "16:00",
            },
          ],
        },
        scheduleText: "Second Wednesday of each month from noon to 4 p.m.; ",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "WE",
          nth: 4,
          times: [
            {
              start: "14:00",
              end: "18:00",
            },
          ],
        },
        scheduleText: "Fourth Wednesday of each month from 2 p.m. to 6 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_4b75bb90-d8f8-4832-9001-a3bdc991e71d",
    name: "Bea Taylor Market by Freestore Foodbank ",
    addressLine: "3401 Rosenthal Way",
    city: "Cincinnati",
    state: "OH",
    zip: "45204",
    neighborhood: "Saylor Park",
    phone: "513-241-1064",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://freestorefoodbank.org/bea-taylor-market/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TU", "FR"],
          times: [
            {
              start: "09:00",
              end: "17:00",
            },
          ],
        },
        scheduleText:
          "Tuesday – Friday from 9 a.m. to 5 p.m.; Saturday from 10 a.m. to 3 p.m.",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["SA"],
          times: [
            {
              start: "10:00",
              end: "15:00",
            },
          ],
        },
        scheduleText:
          "Tuesday – Friday from 9 a.m. to 5 p.m.; Saturday from 10 a.m. to 3 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_2656bbd9-21a6-4d56-aa75-296bd81f385a",
    name: "Good News Church of God in Christ ",
    addressLine: "1063 W North Bend Road",
    city: "Cincinnati",
    state: "OH",
    zip: "45224",
    neighborhood: "College hiill",
    phone: "513-542-7643",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "Open to all living in hamilton County",
    website: "https://www.goodnewscogic.org/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "SA",
          nth: 3,
          times: [
            {
              start: "12:00",
              end: "14:00",
            },
          ],
        },
        scheduleText: "Every Third Saturday from noon to 2 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_119184bd-53f3-472c-8906-acf0994321b9",
    name: "A. Morton Food Pantry ",
    addressLine: "4781 Hamilton Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45223",
    neighborhood: "College Hill",
    phone: "513-681-9665",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45223", "45224"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://mgapprovednonprofits.org/a-morton-food-pantry/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "unknown",
        },
        scheduleText: "Every Third and Fourth Saturday",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_e3d1c746-234e-4fcb-8273-418008d6dea1",
    name: "My Neighbor’s Place Food Pantry ",
    addressLine: "3150 Harrison Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45211",
    neighborhood: "Cheviot",
    phone: "513-661-2505",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45211"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://myneighborsplace.org/programs/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["WE"],
          times: [
            {
              start: "10:00",
              end: "12:00",
            },
          ],
        },
        scheduleText: "Wednesdays from 10 a.m. to noon",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_43b42e4a-264a-4d3b-be20-b9715e6cdcff",
    name: "Faith Temple Ministries Food Pantry and Clothing Boutique ",
    addressLine: "825 Rockdale Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45229",
    neighborhood: "Avondale",
    phone: "513-341-5495",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["WE"],
          times: [
            {
              start: "15:00",
              end: "18:00",
            },
          ],
        },
        scheduleText: "Pantry every Wednesday from 3 p.m. to 6 p.m.",
        notes: "",
      },
      {
        label: "Clothing",
        rule: {
          kind: "weekly",
          byDay: ["TU"],
          times: [
            {
              start: "15:00",
              end: "18:00",
            },
          ],
        },
        scheduleText: "Clothing every Tuesday from 3 p.m. to 6 p.m., ",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_902bc6ee-25dd-4923-8ca5-089cfc322d56",
    name: "Greater New Hope Missionary Church Food Pantry ",
    addressLine: "3655 Harvey Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45229",
    neighborhood: "North Avondale",
    phone: "513-281-3251",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://www.thegreaternewhopembc.com/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "SA",
          nth: 3,
          times: [
            {
              start: "10:00",
              end: "12:00",
            },
          ],
        },
        scheduleText: "Third Saturday of every month from 10 am to noon",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_4c09a1e2-7be2-41c4-94ad-bc0bfd5f0301",
    name: "Love Star Food Pantry ",
    addressLine: "760 North Fred Shuttlesworth Circle",
    city: "Cincinnati",
    state: "OH",
    zip: "45229",
    neighborhood: "North Avondale",
    phone: "513-221-5049",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45229"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "WE",
          nth: 3,
          times: [
            {
              start: "10:00",
              end: "12:30",
            },
          ],
        },
        scheduleText: "Third Wednesday of the month from 10 am to 12:30pm",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_a1c2236c-bdfd-4eb1-8487-e409dcf65728",
    name: "Oliivet Baptist Church Food and Clothing Pantry",
    addressLine: "6939 Montgomery Road",
    city: "Cincinnati",
    state: "OH",
    zip: "45236",
    neighborhood: "",
    phone: "",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://www.olivetbaptistcincy.com/pantry",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "WE",
          nth: 3,
          times: [
            {
              start: "14:30",
              end: "16:30",
            },
          ],
        },
        scheduleText:
          "Third Wednesday of each month from 2:30 p.m. to 4:30 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_ba4633f7-5c3f-48cc-b9f4-2ab3a26124b0",
    name: "The Caring Place Food and Clothing Pantry ",
    addressLine: "5950 Montgomery Road",
    city: "Cincinnati",
    state: "OH",
    zip: "45213",
    neighborhood: "Pleasent Ridge",
    phone: "513-841-1499",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45212", "45213", "45227", "45236", "45237"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://thecaringplace.info/pantry/",
    services: [
      {
        label: "Pantry and clothing",
        rule: {
          kind: "weekly",
          byDay: ["TU", "TH"],
          times: [
            {
              start: "09:00",
              end: "14:00",
            },
          ],
        },
        scheduleText: "Tuesdays and Thursdays from 9 a.m. to 2 p.m",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_afcf89a8-776a-449f-9f61-5caef2990257",
    name: "Valley Interfaith Food & Clothing Center ",
    addressLine: "420 West Wyoming Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45215",
    neighborhood: "Hartwell",
    phone: "513-821-3233",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: [
        "45215",
        "45216",
        "45217",
        "45224",
        "45231",
        "45232",
        "45235",
        "45241",
        "45246",
        "45262",
      ],
      needProofOfResidency: true,
    },
    additionalServices:
      "A three-day food supply for each member of the household Also provides clothing, household items, direct financial aid, resource referral, and victim advocacy and prevention.",
    website: "http://www.vicrc.org/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU", "TH", "FR"],
          times: [
            {
              start: "10:00",
              end: "13:30",
            },
          ],
        },
        scheduleText:
          "Monday, Tuesday, Thursday, and Friday from 10 a.m. to 1:30 p.m. ",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["WE"],
          times: [
            {
              start: "17:00",
              end: "18:30",
            },
          ],
        },
        scheduleText: "Wednesday from 5 p.m. to 6:30 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_f6e8e5e1-44d2-440a-8d3e-91aabe57e810",
    name: "Agape Love Ministries ",
    addressLine: "8050 Reading Road",
    city: "Cincinnati",
    state: "OH",
    zip: "45237",
    neighborhood: "Roselawn",
    phone: "513-543-6968",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices:
      "Open to residents of cincinnati, A variety of dairy products, fresh produce, pastries, clothes, and shoes at no cost to any community member",
    website: "https://www.agapelovemin.org/outreach",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "SA",
          nth: 3,
          times: [
            {
              start: "11:00",
              end: "13:00",
            },
          ],
        },
        scheduleText: "3rd Saturday of each month from 11 a.m. to 1 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_2caf9394-d694-430a-94c5-0fca4ff99b68",
    name: "Ashland Avenue Baptist Church ",
    addressLine: "4255 Ashland Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45212",
    neighborhood: "Norwood",
    phone: "513-531-3626",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "http://www.ashlandavenue.org/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TH"],
          times: [
            {
              start: "11:00",
              end: "14:00",
            },
          ],
        },
        scheduleText: "Thursdays between 11 a.m. to 2 p.m",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_64a86e8e-51a3-4004-8f23-40e72e8f3382",
    name: "Corinthian Baptist Church ",
    addressLine: "1920 Tennessee Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45237",
    neighborhood: "Norwood",
    phone: "513-221-7351",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://www.cbc-c.com/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "monthly",
          byDay: "TH",
          nth: 4,
          times: [
            {
              start: "15:00",
              end: "17:00",
            },
          ],
        },
        scheduleText:
          "Fourth Thursday of each month from 3:00 p.m. to 5:00 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_0a0e9878-83a0-40cf-b0c8-878e05fbaab6",
    name: "Corpus Christi Church Food Pantry ",
    addressLine: "2014 Springdale Road",
    city: "Cincinnati",
    state: "OH",
    zip: "45231",
    neighborhood: "Mt. Healthy",
    phone: "513-825-0618",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45231"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://theblessedtrinityfamily.org/food-pantry",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU", "WE", "TH"],
          times: [
            {
              start: "10:00",
              end: "11:30",
            },
          ],
        },
        scheduleText: "Monday through Thursday from 10 a.m. to 11:30 a.m.",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TU"],
          times: [
            {
              start: "18:00",
              end: "19:30",
            },
          ],
        },
        scheduleText: "Tuesday from 6 p.m. to 7:30 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_d8df0d93-c1a3-4b7d-9ad7-288a44f5057c",
    name: "Food for the Soul Self-Select Pantry ",
    addressLine: "495 Albion Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45246",
    neighborhood: "Glendale",
    phone: "513-771-5291",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "CHECK CALENDAR for date once a month",
    website: "https://ctsisters.org/ministries/food-for-the-soul/ ",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "unknown",
        },
        scheduleText: "CHECK WEBSITE FOR DATE ONCE A MONTH",
        notes: "CHECK WEBSITE FOR DATE once a month",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_9ac47817-ef40-44d2-87e7-f89004fdcb7f",
    name: "Lincoln Heights Outreach Inc ",
    addressLine: "9913 Wayne Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45215",
    neighborhood: "Lincoln Heights",
    phone: "513-744-6260",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45215", "45216", "45240", "45246", "45249"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://www.lincolnheightsoutreach.org/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TH"],
          times: [
            {
              start: "13:00",
              end: "15:00",
            },
          ],
        },
        scheduleText: "Thursdays from 1pm to 3pm",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_01a5ba24-aa18-4b55-8e82-46ff3eb6ac5a",
    name: "Mt. Healthy Alliance Choice Food Pantry ",
    addressLine: "7717 Harrison Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45231",
    neighborhood: "Mt. Healthy",
    phone: "513-551-8036",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45231"],
      needProofOfResidency: true,
    },
    additionalServices:
      "A three-day food supply. Also provides a wellness program and senior boxes.",
    website: "https://mthealthyalliance.org/get-help/food-pantry/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO"],
          times: [
            {
              start: "11:00",
              end: "13:00",
            },
          ],
        },
        scheduleText:
          "Monday from 11 a.m. to 1 p.m., Tuesday from 5 p.m. to 7 p.m., and Thursday and Saturday from 9 a.m. to noon ",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TU"],
          times: [
            {
              start: "17:00",
              end: "19:00",
            },
          ],
        },
        scheduleText:
          "Monday from 11 a.m. to 1 p.m., Tuesday from 5 p.m. to 7 p.m., and Thursday and Saturday from 9 a.m. to noon ",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TH", "SA"],
          times: [
            {
              start: "09:00",
              end: "12:00",
            },
          ],
        },
        scheduleText:
          "Monday from 11 a.m. to 1 p.m., Tuesday from 5 p.m. to 7 p.m., and Thursday and Saturday from 9 a.m. to noon ",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_e80ba230-648c-4515-ba26-684782ca8e9c",
    name: "SON Ministries - Groesbeck UM Church Food Pantry ",
    addressLine: "8871 Colerain Road",
    city: "Cincinnati",
    state: "OH",
    zip: "45251",
    neighborhood: "Colerain",
    phone: "513-385-1793",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45224", "45231", "45239", "45247", "45251"],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://www.groesbeckchurch.org/son-ministries",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO"],
          times: [
            {
              start: "09:00",
              end: "12:00",
            },
          ],
        },
        scheduleText:
          "Monday from 10 a.m. to noon. Wednesday from 10:00 a.m. to noon and 4:30 p.m. to 6:30 p.m.",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["WE"],
          times: [
            {
              start: "09:00",
              end: "12:00",
            },
            {
              start: "16:30",
              end: "18:30",
            },
          ],
        },
        scheduleText:
          "Monday from 10 a.m. to noon. Wednesday from 10:00 a.m. to noon and 4:30 p.m. to 6:30 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_8522071f-3d5f-4f3a-9f38-b8e745a5cee4",
    name: "Fairfield Food Pantry ",
    addressLine: "78 Donald Drive",
    city: "Cincinnati",
    state: "OH",
    zip: "45014",
    neighborhood: "Fairfield",
    phone: "513-829-9047",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: ["45011", "45013", "45014", "45015"],
      needProofOfResidency: false,
    },
    additionalServices: "",
    website: "http://www.fairfieldfoodpantry.org/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU", "TH"],
          times: [
            {
              start: "12:00",
              end: "15:00",
            },
          ],
        },
        scheduleText: "Monday, Tuesday, and Thursday from noon to 3 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_d73d07fe-b1c8-4f9e-a618-263a5293d458",
    name: "The Healing Center ",
    addressLine: "11345 Century Circle W",
    city: "Cincinnati",
    state: "OH",
    zip: "45246",
    neighborhood: "Springdale",
    phone: "513-346-4080",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website:
      "https://www.healingcentercincinnati.org/healing-center-food-pantry",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["WE", "TH", "FR", "SA"],
          times: [
            {
              start: "09:00",
              end: "11:00",
            },
          ],
        },
        scheduleText:
          "Wednesday through Saturday from 9 a.m. to 11 a.m; Thursday evenings from 6:30 p.m. to 8 p.m.",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TH"],
          times: [
            {
              start: "18:30",
              end: "20:00",
            },
          ],
        },
        scheduleText:
          "Wednesday through Saturday from 9 a.m. to 11 a.m; Thursday evenings from 6:30 p.m. to 8 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_f50d77fe-1ccc-4225-b521-ec5ce4d5b18e",
    name: "Landmark Church Bread of Life Food Pantry ",
    addressLine: "1600 Glendale Milford Rd #1231",
    city: "Cincinnati",
    state: "OH",
    zip: "45215",
    neighborhood: "Glendale",
    phone: "513-771-0960",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "Appointments are needed please call ahead",
    website: "https://landmarkbreadoflife.org/community-pantry/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO"],
          times: [
            {
              start: "18:30",
              end: "20:00",
            },
          ],
        },
        scheduleText: "Mondays from 6:30 p.m. to 8 p.m.",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_aebd707a-bced-463c-a6fc-f88bc3acb915",
    name: "Inter Parish Ministry Choice Food Pantry ",
    addressLine: "4632 Archoltz Rd",
    city: "Cincinnati",
    state: "OH",
    zip: "45244",
    neighborhood: "",
    phone: "513-561-3932",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "",
    website: "https://www.ipmfoodpantry.org/",
    services: [
      {
        label: "Pantry Drive Through",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU"],
          times: [
            {
              start: "10:00",
              end: "12:00",
            },
          ],
        },
        scheduleText:
          "one visit per 15-day period. Drive Through: Monday & Tuesday 10:00am - 12:00pm 2nd and 4th Monday 4:30pm- 6:00pm Wednesday CLOSED Thursday & Friday 10:00am - 12:00pm The Market: Monday & Tuesday 12:30pm - 2:30pm Wednesday CLOSED Thursday 12:30pm-2:30pm Donation Hours: Monday & Tuesday 12:00am - 4:00pm Wednesday 9:00am- 4:00pm Thursday 12:00pm - 4:00pm Friday 12:00pm-3:00pm",
        notes: "",
      },
      {
        label: "Pantry Drive Through",
        rule: {
          kind: "monthly",
          byDay: "MO",
          nth: 2,
          times: [
            {
              start: "16:30",
              end: "18:00",
            },
          ],
        },
        scheduleText:
          "ne visit per 15-day period. Drive Through: Monday & Tuesday 10:00am - 12:00pm 2nd and 4th Monday 4:30pm- 6:00pm Wednesday CLOSED Thursday & Friday 10:00am - 12:00pm The Market: Monday & Tuesday 12:30pm - 2:30pm Wednesday CLOSED Thursday 12:30pm-2:30pm Donation Hours: Monday & Tuesday 12:00am - 4:00pm Wednesday 9:00am- 4:00pm Thursday 12:00pm - 4:00pm Friday 12:00pm-3:00pm",
        notes: "",
      },
      {
        label: "Pantry Drive Through",
        rule: {
          kind: "monthly",
          byDay: "MO",
          nth: 4,
          times: [
            {
              start: "16:30",
              end: "18:00",
            },
          ],
        },
        scheduleText:
          "One visit per 15-day period. Drive Through: Monday & Tuesday 10:00am - 12:00pm 2nd and 4th Monday 4:30pm- 6:00pm Wednesday CLOSED Thursday & Friday 10:00am - 12:00pm The Market: Monday & Tuesday 12:30pm - 2:30pm Wednesday CLOSED Thursday 12:30pm-2:30pm Donation Hours: Monday & Tuesday 12:00am - 4:00pm Wednesday 9:00am- 4:00pm Thursday 12:00pm - 4:00pm Friday 12:00pm-3:00pm",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TH", "FR"],
          times: [
            {
              start: "10:00",
              end: "12:00",
            },
          ],
        },
        scheduleText:
          "One visit per 15-day period. Drive Through: Monday & Tuesday 10:00am - 12:00pm 2nd and 4th Monday 4:30pm- 6:00pm Wednesday CLOSED Thursday & Friday 10:00am - 12:00pm The Market: Monday & Tuesday 12:30pm - 2:30pm Wednesday CLOSED Thursday 12:30pm-2:30pm Donation Hours: Monday & Tuesday 12:00am - 4:00pm Wednesday 9:00am- 4:00pm Thursday 12:00pm - 4:00pm Friday 12:00pm-3:00pm",
        notes: "",
      },
      {
        label: "Pantry Market",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU"],
          times: [
            {
              start: "12:30",
              end: "14:30",
            },
          ],
        },
        scheduleText:
          "ne visit per 15-day period. Drive Through: Monday & Tuesday 10:00am - 12:00pm 2nd and 4th Monday 4:30pm- 6:00pm Wednesday CLOSED Thursday & Friday 10:00am - 12:00pm The Market: Monday & Tuesday 12:30pm - 2:30pm Wednesday CLOSED Thursday 12:30pm-2:30pm Donation Hours: Monday & Tuesday 12:00am - 4:00pm Wednesday 9:00am- 4:00pm Thursday 12:00pm - 4:00pm Friday 12:00pm-3:00pm",
        notes: "",
      },
      {
        label: "Pantry Market",
        rule: {
          kind: "weekly",
          byDay: ["TH"],
          times: [
            {
              start: "12:30",
              end: "14:30",
            },
          ],
        },
        scheduleText:
          "ne visit per 15-day period. Drive Through: Monday & Tuesday 10:00am - 12:00pm 2nd and 4th Monday 4:30pm- 6:00pm Wednesday CLOSED Thursday & Friday 10:00am - 12:00pm The Market: Monday & Tuesday 12:30pm - 2:30pm Wednesday CLOSED Thursday 12:30pm-2:30pm Donation Hours: Monday & Tuesday 12:00am - 4:00pm Wednesday 9:00am- 4:00pm Thursday 12:00pm - 4:00pm Friday 12:00pm-3:00pm",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_2399c570-dd9e-4152-8de3-5065fcf56c8c",
    name: "Sem Client Choice Food Pantry ",
    addressLine: "6474 Beechmont Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45230",
    neighborhood: "Anderson Township",
    phone: "513-231-1412",
    eligibility: {
      kind: "zip_restricted",
      zipCodes: [
        "45102",
        "45103",
        "45106",
        "45226",
        "45230",
        "45244",
        "45254",
        "45255",
      ],
      needProofOfResidency: true,
    },
    additionalServices: "",
    website: "https://www.semfoodpantry.org/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["MO", "TU", "WE", "TH", "FR"],
          times: [
            {
              start: "10:00",
              end: "14:00",
            },
          ],
        },
        scheduleText:
          "Monday through Friday from 10 a.m. to 2 p.m. Tuesday from 5:30 p.m. to 7 p.m. Saturday from 10 a.m. to noon",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TU"],
          times: [
            {
              start: "17:30",
              end: "19:00",
            },
          ],
        },
        scheduleText:
          "Monday through Friday from 10 a.m. to 2 p.m. Tuesday from 5:30 p.m. to 7 p.m. Saturday from 10 a.m. to noon",
        notes: "",
      },
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["SA"],
          times: [
            {
              start: "10:00",
              end: "12:00",
            },
          ],
        },
        scheduleText:
          "Monday through Friday from 10 a.m. to 2 p.m. Tuesday from 5:30 p.m. to 7 p.m. Saturday from 10 a.m. to noon",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
  {
    id: "pantry_5b42e193-fb42-4d42-8939-bbebaa1d8222",
    name: "Madisonville Education and Assistance Center ",
    addressLine: "4600 Erie Avenue",
    city: "Cincinnati",
    state: "OH",
    zip: "45227",
    neighborhood: "(Madisonville)",
    phone: "513-271-5501",
    eligibility: {
      kind: "open_to_all",
    },
    additionalServices: "CHECK WEBSITE FOR HOURS",
    website: "https://meaccincinnati.org/",
    services: [
      {
        label: "Pantry",
        rule: {
          kind: "weekly",
          byDay: ["TU"],
          times: [
            {
              start: "09:00",
              end: "12:00",
            },
          ],
        },
        scheduleText:
          "Tuesdays at various times Shop once a month for fresh, frozen, packaged foods, and personal care products. CHECK WEBSITE FOR HOURS",
        notes: "",
      },
    ],
    lgbtVetted: false,
  },
];
