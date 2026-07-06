# Text Formatter Pro Architecture Documentation

This document explains the internal architecture, application structure, data flow, and design decisions used in Text Formatter Pro.

## Table of Contents

- [Version Information](#version-information)
- [Overview](#overview)
- [Architectural Overview](#architectural-overview)
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
- [Context API Data Flow](#context-api-data-flow)
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
- [Data Flow](#data-flow)
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

Text Formatter Pro is a React-based Chrome Extension built with a modular architecture.

The application separates user interface components, shared state management, text processing logic, and browser storage handling to improve maintainability.

## Architectural Overview

The application follows a component-based architecture.

Main layers:

- Presentation Layer
- State Management Layer
- Utility Processing Layer
- Browser Storage Layer

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

## Architecture Goals

The architecture focuses on:

- Component reusability
- Clear separation of responsibilities
- Maintainable state management
- Local-first data handling
- Simple extension performance

## Application Lifecycle

Application flow:

1. Extension popup opens.
2. React application initializes.
3. Stored preferences are loaded.
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

- Buttons
- Toggle
- Modals

### context

Manages shared application state.

Responsible for:

- Text state
- History state
- Preferences

### hooks

Contains reusable logic separated from UI components.

### utils

Contains independent helper functions for text processing.

## Component Architecture

Components are responsible only for UI rendering and user interaction.

Business logic is separated into context, hooks, and utilities.

## Component Responsibilities

Components handle:

- Displaying data
- Triggering user actions
- Rendering updated state

Components do not directly manage storage operations.

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
- Auto Save status
- Character limit
- User actions

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

## Context API Data Flow

React Context API provides shared data without prop drilling.

Components consume:

- State values
- Update functions
- Preference controls

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

Processing happens locally inside the browser.

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

Storage manages persistent application data.

Stored:

- Preferences
- Auto Save data
- Recent history
- TextArea

## Chrome Storage Architecture

Chrome Storage API provides browser-based persistence.

Used for:

- Saving settings
- Restoring data after reopening extension

## Build Architecture

Text Formatter Pro uses Vite for development and production builds.

Development:

- Provides local development environment
- Supports fast updates during coding

Production build:

- Generates optimized extension files
- Creates the final build folder used for loading the extension in Chrome

## Manifest V3 Architecture

Text Formatter Pro uses Manifest V3 configuration for Chrome Extension support.

Manifest configuration defines:

- Extension metadata
- Required permissions
- Extension entry points
- Browser integration settings

Manifest V3 provides the connection between the React application and Chrome Extension environment.

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

User settings are updated through Context and stored locally.

## Preferences Architecture

Preferences include:

- Auto Save configuration
- Character limit settings
- User options

## Modal & Menu Architecture

Menus and modals provide access to secondary features:

- Recent texts
- Settings
- About information

## Clipboard Flow

Clipboard actions occur after user interaction.

Supported:

- Copy text
- Paste text

## File Export Flow

Text content is converted into a downloadable `.txt` file inside the browser.

## Data Flow

```text
UI
 |
Context
 |
Utilities
 |
Storage
```

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

- Input checks
- User messages
- Safe fallback behavior

## Security & Privacy Architecture

Architecture follows local-first processing.

- No external processing servers
- Local Chrome Storage usage
- User-controlled data

## Performance Considerations

Implemented approaches:

- Lightweight components
- Local processing
- Minimal storage operations
- Reusable functions

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
