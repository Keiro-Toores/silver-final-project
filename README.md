# MotoRadar Final project

## Tiimi liikmed
- **Silver Reinart** - Tak-23
- **Keiro Toodre** - Tak-24
- **Kevin Laanekivi** - Ta-25
- **Rasmus Lek** - Tak-25

---

## Projekti lingid
- **Figma disain**: https://www.figma.com/design/TGvAjL17XIaSoKemeAOeQO/FINAL_PROJECT?node-id=34-2&t=2uUifZ3QoVVe6waz-0
- **Live koduleht**: https://silver-final-project.vercel.app/

## Projekti ajakava

### Esimene päev: 05.11.25

- **Tutvusime tiimiga**
- **Arutasime ideesid**
- **Alustasime figmaga**
- **Panime Repo püsti**
---

### Teine päev: 06.11.25

- Jätkasime fiigmaga kuna Genile ei meeldind meie idee
- Alustasime koodimisega

---


### Kolmas päev: 07.11.25
- Viimistlesime koodi
- Valmistusime esitluseks

---


# 🏍️ MotoRadar
MotoRadar is a platform that brings together essential features for motorcyclists into one application. The goal is to create an active and useful community where users can share routes, information, events, and request assistance while on the road if needed.
---
## 🚀 Project Goal
To create a system (API + user interface) that supports the motorcyclist community and makes the riding experience safer, more exciting, and improves the speed of information sharing.
---

## 🛠️ Tech Stack for MotoRadar
| Layer       | Technology                                       | Notes                                                      |
| ----------- | ------------------------------------------------ | ---------------------------------------------------------- |
| Backend API | Firebase (Firestore + Realtime DB + Auth)       | Serverless backend, user authentication, route sharing, SOS alerts |
| Database    | sqflite                                          | SQLite plugin for Flutter, store GPS points and rides locally |
| Real-time   | Firebase Realtime Database + Cloud Messaging    | Live user map, SOS alerts, push notifications             |
| Frontend    | Flutter (Dart)                                  | Cross-platform mobile app, UI, map integration            |
| Maps        | Google Maps SDK for Flutter                      | Display routes, polylines, live users, markers           |
| Deployment  | Direct APK install / Firebase App Distribution  | Free testing on Android devices; optional Play Store deployment |
---
## 🔧 Core Features
### 📍 Route Tracking
- Saves the ridden route (GPS-based).
- Displays distance covered, average speed, and time spent.
- Users can view and rate routes shared by others.
### 🧭 Route Sharing and Categorization
- Users can share their favorite riding routes.
- Roads are categorized: **offroad**, **asphalt**, **mixed roads**, etc.
- Routes can include descriptions, difficulty level, and photos.
### 🆘 Emergency Assistance Feature
- Ability to mark an exact location and describe the issue (e.g., mechanical failure).
- Nearby users can see the assistance request and respond.
- Replaces the need for Facebook posts in urgent situations.
### 👥 Live User Map
- Displays registered users on the map (if visibility is enabled).
- Option to join others on the same route or start a group ride.
### 📢 Info Board & Classifieds
- Shared information space for motorcycle-related topics:
  - Events (gatherings, races)
  - Classifieds (parts, bikes, gear)
  - Services (workshops, repairs, transport, etc.)
- Ability to filter by topic, location, or date.
---
## 🗺️ Roadmap
This roadmap outlines the development plan for the **Moto Tracker App**, a Flutter-based motorcycle tracking app with local GPS tracking, route sharing, real-time user map, and emergency alerts.
---
<details>
<summary>Phase 1: Project Setup</summary>
- Install Flutter, Android Studio, and device emulator.
- Initialize Flutter project.
- Set up Firebase project (Firestore, Realtime DB, Auth, Storage).
- Add essential Flutter packages: `sqflite`, `google_maps_flutter`, `geolocator`, `firebase_core`, `cloud_firestore`, `firebase_auth`, `firebase_messaging`.
- Configure Android app with Firebase (`google-services.json`).
**Deliverable:**
Basic Flutter app runs on Android with Firebase connected.
</details>
<details>
<summary>Phase 2: Local Route Tracking</summary>
- Implement GPS tracking using `geolocator`.
- Create SQLite database schema for rides and GPS points.
- Implement start/stop ride buttons.
- Calculate ride statistics: distance, time, average speed.
- Display ride route on Google Maps with polylines.
**Deliverable:**
Rider can start/stop a ride and see the route + stats on the map.
</details>
<details>
<summary>Phase 3: Route Sharing & Firestore Integration</summary>
- Add Firebase Firestore for storing shared rides.
- Sync local rides to Firestore when online.
- Include ride metadata: title, description, road type, difficulty, photos.
- Create UI to view shared rides from other users.
- Optional: Users can rate or like rides.
**Deliverable:**
Users can share rides online and view others’ rides.
</details>
<details>
<summary>Phase 4: Real-time Features & SOS Alerts</summary>
- Implement live user location tracking using Firebase Realtime DB.
- Display other active users on the map (if visibility enabled).
- Add SOS button: mark exact location and description of problem.
- Send notifications to nearby users using Firebase Cloud Messaging.
- Optional: add “join group ride” feature.
**Deliverable:**
Live user map works; SOS alerts can be sent/received in real time.
</details>
<details>
<summary>Phase 5: Info Board & Media Storage</summary>
- Add Firestore collection for info board posts.
- Implement categories: events, classifieds, services.
- Enable image uploads with Firebase Storage.
- Add filters by topic, location, or date.
- Display posts in a scrollable list in the app.
**Deliverable:**
Users can post, view, and filter info board content with images.
</details>
<details>
<summary>Phase 6: Polishing & Testing</summary>
- Improve UI/UX: buttons, maps, stats display.
- Test GPS tracking accuracy and map polylines.
- Test Firebase sync: offline → online transitions.
- Test SOS alerts and notifications.
- Bug fixes, code cleanup, and comments.
**Deliverable:**
Stable, functional app ready for submission/demo.
</details>
<details>
<summary>Phase 7: Free Testing & Deployment</summary>
- Build debug/release APK: `flutter build apk --debug`
- Install APK on your own device for testing.
- Optional: use Firebase App Distribution to share APK with testers.
- Prepare screenshots/documentation for final presentation.
</details>
---
