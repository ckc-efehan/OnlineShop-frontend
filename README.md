# OnlineShop Frontend

Eine Frontend-Anwendung für einen Online-Shop, entwickelt mit Vue 3, TypeScript und Vite.

## Projektbeschreibung

Dieses Projekt ist das Frontend für einen Online-Shop. Es bietet Funktionen wie:

- Benutzerregistrierung und -anmeldung
- Admin-Dashboard zur Verwaltung des Shops

Die Anwendung kommuniziert mit einem Backend-Server über REST-API-Aufrufe.

## Technologien

- **Vue 3**: JavaScript-Framework für die Benutzeroberfläche
- **TypeScript**: Typsicheres JavaScript
- **Vite**: Build-Tool und Entwicklungsserver
- **Vue Router**: Routing-Bibliothek für Vue.js
- **Axios**: HTTP-Client für API-Anfragen
- **FontAwesome**: Icon-Bibliothek
- **Vitest**: Test-Framework für Vue-Anwendungen

## Projektstruktur

```
src/
├── components/         # Vue-Komponenten
│   ├── AdminSite.vue   # Admin-Dashboard
│   └── registerLoginSite.vue # Anmelde- und Registrierungsseite
├── router/             # Vue Router Konfiguration
├── App.vue             # Haupt-Vue-Komponente
└── main.ts             # Einstiegspunkt der Anwendung
```

## Installation und Einrichtung

### Voraussetzungen

- Node.js (empfohlen: neueste LTS-Version)
- npm (wird mit Node.js installiert)

### Installation

1. Repository klonen:
   ```sh
   git clone <repository-url>
   cd OnlineShop-frontend
   ```

2. Abhängigkeiten installieren:
   ```sh
   npm install
   ```

### Entwicklung

Starten des Entwicklungsservers:
```sh
npm run dev
```

Die Anwendung ist dann unter `http://localhost:5173` verfügbar.

### Produktion

Erstellen der Produktionsversion:
```sh
npm run build
```

Vorschau der Produktionsversion:
```sh
npm run preview
```

## Verfügbare Skripte

- `npm run dev`: Startet den Entwicklungsserver
- `npm run build`: Erstellt die Produktionsversion
- `npm run preview`: Startet einen lokalen Server für die Produktionsvorschau
- `npm run test:unit`: Führt Unit-Tests aus
- `npm run type-check`: Überprüft TypeScript-Typen
- `npm run lint`: Führt ESLint aus
- `npm run format`: Formatiert den Code mit Prettier

## Empfohlene IDE-Einrichtung

[VSCode](https://code.visualstudio.com/) mit folgenden Erweiterungen:
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (und Vetur deaktivieren)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Backend-Verbindung

Die Anwendung verbindet sich standardmäßig mit einem Backend-Server unter `http://localhost:8080`. Stellen Sie sicher, dass der Backend-Server läuft, bevor Sie die Frontend-Anwendung verwenden.