# Text Formatter Pro Architecture Documentation

This document explains the internal architecture, application structure, data flow, and design decisions used in Text Formatter Pro.

## Table of Contents

- [Version Information](#version-information)
- [Overview](#overview)
- [Architectural Overview](#architectural-overview)
- [Auto Save Workflow](#auto-save-workflow)
- [State Management](#state-management)
- [Architecture Goals](#architecture-goals)
- [Application Lifecycle](#application-lifecycle)
- [High-Level Architecture](#high-level-architecture)
- [Folder Structure](#folder-structure)
- [Folder Responsibilities](#folder-responsibilities)
- [Component Architecture](#component-architecture)
- [Component Responsibilities](#component-responsibilities)
- [Component Communication](#component-communication)
- [Context Architecture](#context-architecture)
- [State Management Flow](#state-management-flow)
- [Custom Hooks Architecture](#custom-hooks-architecture)
- [Utility Layer Architecture](#utility-layer-architecture)
- [Text Processing Architecture](#text-processing-architecture)
- [Find & Replace Flow](#find--replace-flow)
- [Text Metrics Calculation Flow](#text-metrics-calculation-flow)
- [Storage Architecture](#storage-architecture)
- [Chrome Storage Architecture](#chrome-storage-architecture)
- [Build Architecture](#build-architecture)
- [Manifest V3 Architecture](#manifest-v3-architecture)
- [Auto Save Flow](#auto-save-flow)
- [Recent Text History Flow](#recent-text-history-flow)
- [User Preferences Flow](#user-preferences-flow)
- [Preferences Architecture](#preferences-architecture)
- [Modal & Menu Architecture](#modal--menu-architecture)
- [Clipboard Flow](#clipboard-flow)
- [File Export Flow](#file-export-flow)
- [Data Storage Model](#data-storage-model)
- [Error Handling Architecture](#error-handling-architecture)
- [Security & Privacy Architecture](#security--privacy-architecture)
- [Performance Considerations](#performance-considerations)
- [Architectural Decisions](#architectural-decisions)
- [Future Architecture Improvements](#future-architecture-improvements)

## Version Information

**Application:** Text Formatter Pro  
**Version:** 1.0.0  
**Platform:** Chrome Extension  
**Manifest Version:** Manifest V3  

## Overview

Text Formatter Pro follows a modular React-based Chrome Extension architecture designed with separation of responsibilities.
The application is divided into reusable components where each component manages a specific part of the interface such as the editor, formatting controls, statistics panel, action buttons, and menu options.
Application-wide data is managed using React Context API, allowing shared state such as text content, character limits, auto-save status, and recent text history to be accessed across components.
Custom hooks handle reusable application logic, while utility functions manage text formatting and transformation operations.
Chrome Storage API is used as the persistence layer to store text data, auto-save settings, character limits, and recent history locally inside the browser.
The overall flow separates UI rendering, state management, business logic, and browser storage integration, making the extension easier to maintain and extend.

## Architectural Overview

The following diagram shows the high-level architecture of Text Formatter Pro and how data flows between the user interface, application logic, and browser storage.

```text
User
 |
 v
Chrome Extension Popup
 |
 v
React Components
 |
 v
Text Context
 |
 v
Utility Functions
 |
 v
Chrome Storage API
 |
 v
Browser Local Storage
```
## State Management

Text Formatter Pro uses the React Context API to manage shared application state across components. The centralized context stores the current text, recent text history, character limit, and auto-save preference. Components access and update this shared state through context functions, ensuring consistent data flow throughout the application.

## Auto Save Workflow

Text Formatter Pro uses Chrome Storage API to support optional auto-save functionality.
When enabled, text data, recent history, character limits, and auto-save status are stored locally and restored when the extension is reopened.

## Architecture Goals

The architecture focuses on:

- Component reusability
- Clear separation of responsibilities
- Maintainable state management
- Local-first data handling
- Lightweight and efficient performance

## Application Lifecycle

Application flow:

1. Extension popup opens.
2. React application initializes.
3. Previously saved data and user preferences are loaded.
4. User interacts with text tools.
5. State updates through Context API.
6. Required data is saved using Chrome Storage.

## High-Level Architecture

```text
                         User
                          |
                          v
              Chrome Extension Popup
                          |
                          v
                    React Application
                          |
        -------------------------------------
        |                                   |
        v                                   v
 UI Components                       TextContext
        |                                   |
        |                  --------------------------------
        |                  |              |               |
        v                  v              v               v
 User Interface     State Management  Custom Hooks   Chrome APIs
                                      |               |
                                      v               v
                              Utility Functions  Chrome Storage
                                      |               |
                                      v               v
                              Text Processing   Browser Storage
```
Main responsibilities:

UI Components handle rendering and user interaction
TextContext manages shared application state
Custom hooks organize reusable logic
Utility functions process text operations
Chrome APIs provide browser extension functionality
Chrome Storage manages local persistence

## Folder Structure

```text
text-formatter-pro/

├── public/
│   │
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   │
│   └── manifest.json
│
├── src/
│   │
│   ├── components/
│   │   └── UI components
│   │
│   ├── context/
│   │   └── TextContext and shared state
│   │
│   ├── hooks/
│   │   └── Reusable React hooks
│   │
│   ├── utils/
│   │   └── Text processing utilities
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── docs/
│   │
│   ├── screenshots/
│   │
│   ├── USER_GUIDE.md
│   ├── INSTALLATION.md
│   ├── TECHNICAL_OVERVIEW.md
│   ├── ARCHITECTURE.md
│   ├── TROUBLESHOOTING.md
│   ├── PRIVACY.md
│   └── RELEASE_NOTES.md
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── LICENSE
```
## Folder Responsibilities

### components

Contains reusable interface sections.

Examples:

- Header
- Editor
- FormatTools
- StatsPanel
- ActionButtons
- MenuDropdown
- Modals

### context

Manages shared application state.

Responsible for:

- Current text
- Recent text history
- Auto-save preference
- Character limit


### hooks

Contains reusable application logic that is shared across multiple components.

### utils

Contains reusable helper functions for text formatting and processing.

## Component Architecture

Components are responsible only for UI rendering and user interaction.

Business logic is separated into context, hooks, and utilities.

## Component Responsibilities

Components handle:

- Displaying data
- Triggering user actions
- Rendering updated state

Components focus on rendering the user interface and handling user interactions.  Components do not directly manage storage operations.

## Component Communication

Components communicate through shared Context state.

Flow:

```text
TextProvider
      |
      v
TextContext
      |
      v
Child Components
```

## Context Architecture

TextContext manages global application data.

Responsibilities:

- Current text value
- Recent text history
- Auto Save preference
- Character limit

## State Management Flow

```text
User Action
     |
     v
Component
     |
     v
Context Function
     |
     v
State Update
     |
     v
UI Re-render
```

## Custom Hooks Architecture

Custom hooks separate reusable logic from components.

Benefits:

- Cleaner components
- Better code organization
- Reusable functionality

## Utility Layer Architecture

Utility functions handle pure text operations.

Examples:

- Formatting
- Cleaning
- Sorting
- Calculations

## Text Processing Architecture

Flow:

```text
Input Text
    |
    v
Formatting Function
    |
    v
Updated Text Output
```

All text processing is performed locally within the browser without sending data to external servers.

## Find & Replace Flow

```text
User Input
 |
 v
Find Value
 |
 v
Replace Operation
 |
 v
Update Text State
```

## Text Metrics Calculation Flow

Statistics are generated from current text.

Includes:

- Word count
- Character count
- Line count
- Reading time

## Storage Architecture

Storage manages persistent application data using the Chrome Storage API.

Stored data includes:

- Current editor text
- Recent text history
- Auto-save preference
- Character limit

## Chrome Storage Architecture

Chrome Storage API provides browser-based persistence for application data.

It stores:

- Current editor text
- Recent text history
- Auto-save preference
- Character limit

Stored data is restored when the extension is reopened.

## Build Architecture

Text Formatter Pro uses Vite for both development and production builds.

Development:

- Fast local development
- Hot Module Replacement (HMR) for quicker updates

Production:

- Generates an optimized production build
- Produces the extension files that can be loaded into Chrome

## Manifest V3 Architecture

Text Formatter Pro uses Manifest V3 to configure the Chrome extension.

The manifest defines:

- Extension metadata
- Required permissions
- Popup entry point
- Icons
- Browser integration settings

It serves as the configuration file that enables the React application to run as a Chrome extension.

## Auto Save Flow

```text
Text Update
 |
 v
Auto Save Check
 |
 v
Chrome Storage Save
```

## Recent Text History Flow

```text
Text Action
 |
 v
Add Recent Entry
 |
 v
Save History
 |
 v
Restore When Needed
```

## User Preferences Flow

User preferences are updated through the Context API and stored locally using the Chrome Storage API.

## Preferences Architecture

Preferences include:

- Auto-save preference
- Character limit

Persisted application data includes:

- Current editor text
- Recent text history

## Modal & Menu Architecture

Menus and modals provide access to additional application features, including:

- Recent texts
- Character Limit 
- About information

## Clipboard Flow

Supported:

- Copy text
- Paste text

## File Export Flow

The current editor content is converted into a downloadable `.txt` file directly within the browser.

## Data Storage Model

Example:

```text
{
 savedText,
 recentTexts,
 autoSave,
 charLimit
}
```

## Error Handling Architecture

Errors and validations are handled through:

- Input validation
- User-friendly feedback messages
- Safe fallback behavior

## Security & Privacy Architecture

Architecture follows local-first processing.

- No external data processing
- Local Chrome Storage for persistence
- User-controlled data

## Performance Considerations

Implemented approaches:

- Lightweight components
- Local text processing
- Minimal storage operations
- Efficient state updates

## Architectural Decisions

Key decisions:

- React for component-based UI
- Context API for global state
- Chrome Storage for persistence
- Utility functions for text operations
- Manifest V3 extension model

## Future Architecture Improvements

Possible improvements:

- Additional reusable hooks
- Expanded text utilities
- More export handling options
- Enhanced preference management
