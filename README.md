Food Security Flow

Food Security Flow is a Cincinnati-focused web application that helps residents quickly find nearby food pantries they are eligible for.

The application calculates proximity using geolocation and generates custom resource files to simplify access.

🚀 What It Does

Based on a user’s location and eligibility:

Finds the closest qualifying food pantries

Filters by ZIP code restrictions and proof-of-residency rules

Generates:

📍 Custom Google Maps (KML) file

📅 Google Calendar (.ics) file with upcoming pantry hours

📄 Markdown guide with eligibility and preparation tips

No user data is stored.

🧠 Core Architecture

The project is structured by feature domain:

src/
features/
location/
pantries/
questionnaire/
exports/
components/
services/

Key Concepts

Feature-based modular architecture

Reducer-driven state management

Type-safe domain modeling

Mapbox API integration (address search + geocoding)

Distance calculation via Haversine formula

Dynamic ICS calendar generation

KML file generation for Google Maps

JSON-driven pantry data model

📍 Location Handling

Users may provide:

ZIP Code

Browser geolocation

Autocomplete address search (Mapbox Search API)

All inputs are normalized into:

MasterLocation {
zipCode
lat
lng
hasProofOfResidency
}

📊 Pantry Data Model

Each pantry includes:

Structured eligibility rules

Machine-readable recurring schedules

Service types (pantry, meals, mobile)

Coordinates for proximity sorting

🛠 Tech Stack

React (Vite)

TypeScript

TailwindCSS

Mapbox Search + Geocoding API

Client-side file generation (ICS / KML)

🔐 Privacy

No database

No user tracking

No location storage

All calculations performed client-side

🌱 Roadmap

Additional cities

Public pantry submission workflow

Accessibility improvements

Administrative approval system

Hosting + domain deployment

👩‍💻 Author

Serana Robinson
Web Development

☕ CashApp: $mangosiriachaxx
