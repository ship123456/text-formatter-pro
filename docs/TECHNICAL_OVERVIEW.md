# Text Formatter Pro Technical Overview

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Features](#features)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [Limitations](#limitations)

## Overview

Text Formatter Pro is built using a modular React architecture with separate layers for UI components, state management, text processing, and browser integration.

The application uses React Context API, utility functions, and Chrome Extension APIs to keep functionality organized and maintainable.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Building user interface |
| JavaScript | Application logic |
| CSS3 | Styling |
| Vite | Development and build system |
| Manifest V3 | Chrome Extension configuration |
| Chrome Storage API | Browser data persistence |

## Project Structure

The project is organized into the following main directories and files:

```text
text-formatter-pro/

├── public/
│   ├── icons/
│   └── manifest.json
│
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── docs/
│   ├── screenshots/
│   └── documentation files
│
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```
## Architecture

Text Formatter Pro follows a modular React architecture with separate layers for UI components, state management, text processing, and browser integration.

### React Components

- Handle interface rendering
- Manage user interactions
- Display formatting tools and application information

### Context Layer

- Manages shared application state
- Provides centralized state access across components

### Utility Layer

- Handles text formatting and cleanup operations
- Performs text processing and statistics calculations

### Browser Integration Layer

- Uses Chrome Extension APIs
- Handles Chrome Storage API for local data persistence
- Supports clipboard and download functionality

This separation keeps the application organized, maintainable, and easier to extend.

## Features

The technical implementation supports the following features:

- Text formatting and case conversion
- Text cleanup operations
- Find and replace functionality
- Text statistics calculation
- Recent text history management
- Auto-save functionality
- Character limit settings
- Clipboard integration
- Text export as `.txt` files
- Local data persistence using Chrome Storage API

## State Management

The application uses a combination of component state and React Context API.

Local state manages component-specific data, while Context API manages shared data such as:

- Text content
- Recent history
- Auto-save status
- Character limit

This keeps data flow organized across different components.

## Data Flow

The application follows this data flow:

```text
User Action
     |
     v
React Component
     |
     v
Local State / Context API
     |
     v
Text Processing / Event Handler
     |
     v
Updated Text / UI State
     |
     v
Chrome Storage API
```

## Limitations

- Requires Chrome Extension API support.
- Local data depends on browser storage availability.

