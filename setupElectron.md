
# Setting Up Existing or new React Project as Desktop Application

# 📦 React + Vite + Electron Desktop App

This guide explains how to convert a React app (using Vite) into a cross-platform desktop application using Electron.

---

## ✅ Prerequisites

- Node.js >= 16
- npm
- Git (optional)

---

## 🏗️ Step 1: Initialize Your React App with Vite

If you don’t have an existing project, create one:

```bash
npm create vite@latest my-desktop-app -- --template react
cd my-desktop-app
npm install

```

----------

## ⚙️ Step 2: Install Electron & Dependencies

Install the required packages:

```bash
npm install --save-dev electron electron-builder concurrently wait-on

```

----------

## 📁 Step 3: Create Electron Main File

Create a new file:

```bash
mkdir public
touch public/electron.cjs

```

Add your Electron main process logic inside `public/electron.cjs`.

> ✅ Use `.cjs` extension to avoid ES Module issues with `require()` and Node.js.

----------

## 📝 Step 4: Update `package.json`

Update the following fields:

```json
{
  "main": "public/electron.cjs",
  "homepage": "./",
  "scripts": {
    "start": "vite",
    "build": "vite build",
    "electron-dev": "concurrently \"npm:start\" \"wait-on http://localhost:5173 && electron .\"",
    "dist": "electron-builder"
  },
  "build": {
    "appId": "com.example.reactapp",
    "files": [
      "dist/**/*",
      "public/electron.cjs"
    ],
    "directories": {
      "buildResources": "assets"
    }
  }
}

```

----------

## 🧪 Step 5: Run Electron in Development

Start the development environment:

```bash
npm run electron-dev

```

This will:

-   Start the Vite dev server.
    
-   Launch Electron and load your React app inside a native desktop window.
    

----------

## 📦 Step 6: Build for Production

1.  Build your Vite app:
    

```bash
npm run build

```

2.  Create a distributable Electron app:
    

```bash
npm run dist

```

This will generate platform-specific installers (`.exe`, `.dmg`, `.AppImage`, etc.) in the `dist/` directory.

----------



## 🚀 You're All Set!

You now have a desktop application built using React, Vite, and Electron! 🎉

Feel free to customize further with native modules, menus, SQLite, or file system access as needed.

