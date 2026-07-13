# Text Formatter Pro Technical Overview

This document explains the technical implementation, technologies, browser APIs, and internal functionality used in Text Formatter Pro.

## Table of Contents

- [Version Information](#version-information)
- [Overview](#overview)
- [Technical Requirements](#technical-requirements)
- [Technology Stack](#technology-stack)
- [Chrome Extension Overview](#chrome-extension-overview)
- [Manifest V3 Configuration](#manifest-v3-configuration)
- [Application Workflow](#application-workflow)
- [React Implementation Overview](#react-implementation-overview)
- [Component Implementation](#component-implementation)
- [State Management](#state-management)
- [Context API Implementation](#context-api-implementation)
- [Input Handling & Event Flow](#input-handling--event-flow)
- [Text Processing Engine](#text-processing-engine)
- [Text Statistics Processing](#text-statistics-processing)
- [Chrome Storage & Data Persistence](#chrome-storage--data-persistence)
- [Recent Text History Implementation](#recent-text-history-implementation)
- [Character Limit Handling](#character-limit-handling)
- [Modal & Menu Management](#modal--menu-management)
- [Clipboard Integration](#clipboard-integration)
- [Text Export Handling](#text-export-handling)
- [Browser Permissions](#browser-permissions)
- [Browser API Usage](#browser-api-usage)
- [Privacy & Local Data Handling](#privacy--local-data-handling)
- [Cross-Browser Compatibility](#cross-browser-compatibility)
- [Error Handling](#error-handling)
- [Performance Considerations](#performance-considerations)
- [Code Organization](#code-organization)
- [Build Process](#build-process)
- [Technical Limitations](#technical-limitations)
- [Future Technical Improvements](#future-technical-improvements)

## Version Information

**Application:** Text Formatter Pro  
**Version:** 1.0.0  
**Platform:** Chrome Extension  
**Manifest Version:** Manifest V3

## Overview

Text Formatter Pro is built using a modular React architecture with separate layers for UI components, state management, text processing, and browser integration.

The application uses React Context API, utility functions, and Chrome Extension APIs to keep functionality organized and maintainable.

## Technical Requirements

Required environment:

- Chromium-based browser
- Node.js development environment
- npm package manager

Development requirements:

- React
- Vite
- JavaScript
- Chrome Extension APIs

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Building user interface |
| JavaScript | Application logic |
| CSS3 | Styling |
| Vite | Development and build system |
| Manifest V3 | Chrome Extension configuration |
| Chrome Storage API | Browser data persistence |

## Chrome Extension Overview

Text Formatter Pro runs as a browser extension popup.

The React application is loaded inside the extension environment and communicates with supported Chrome APIs for browser functionality.

## Manifest V3 Configuration

The `manifest.json` file is the core configuration file of the Chrome extension. It defines the extension's metadata, permissions, entry points, and browser integration settings.

It manages:

- **Manifest Version (V3):** Specifies the extension format supported by modern Chromium-based browsers.
- **Extension Information:** Defines the extension name, version, and description.
- **Action Configuration:** Registers the popup interface displayed when the extension icon is clicked.
- **Permissions:** Requests the `storage` permission to persist editor text, recent history, auto-save status, and user preferences.
- **Icons:** Specifies the extension icons displayed in the Chrome toolbar and Extensions page.

The `manifest.json` file serves as the entry point for the extension and allows Chrome to correctly load, configure, and manage the application.

## Application Workflow

```
User Input / Action
        |
        v
React Component
        |
        v
Local State / Context State
        |
        v
Utility Functions / Event Handlers
        |
        v
Updated Text / UI State
        |
        v
Chrome Storage Bridge
```

## React Implementation Overview

React manages:

- Component rendering
- User interactions
- Interface updates
- State-driven UI changes

The application uses functional components with React Hooks.

## Component Implementation

Components are separated based on their responsibilities.

Each component manages a specific part of the extension such as text editing, formatting actions, statistics display, menus, and modal windows.

This modular structure keeps the interface organized and easier to maintain.

## State Management

The application uses a combination of component state and React Context API.

Local state manages component-specific data, while Context API manages shared data such as text content, recent history, auto-save status, and character limit.
This keeps data flow organized across different components.


## Context API Implementation

React Context API provides centralized state access.

It avoids passing data manually through multiple component levels.

## Input Handling & Event Flow

Flow:

```text
User Action
     |
     v
Component Event Handler
     |
     v
Local State / Context Update
     |
     v
Text Processing or Storage Logic
     |
     v
Updated UI
```

## Text Processing Engine

The text processing engine handles multiple formatting and analysis operations.

Supported operations include:

- Case conversion (uppercase, lowercase, capitalization)
- Text cleanup (extra spaces, duplicate lines, blank lines, sorting)
- Find and replace functionality
- Text statistics calculation including characters, words, lines, and reading time

## Text Statistics Processing

Statistics calculated:

- Characters
- Words
- Lines
- Reading time estimation

## Chrome Storage & Data Persistence

Chrome Storage API stores extension data locally inside the browser.

Stored data includes:

- Recent text history
- Auto-save status
- Character limit settings
- Saved editor text

This allows data to persist even after closing and reopening the extension.

## Recent Text History Implementation

Recent history stores previously used text entries using Chrome Storage API.

Users can restore saved entries, remove individual items, or clear the entire history

## Character Limit Handling

Character limit functionality controls the maximum allowed text length in the editor.

The selected limit is managed through application state and stored using Chrome Storage API for persistence.

## Modal & Menu Management

Menu and modal components handle additional extension features.
The active modal state controls which section is displayed, such as recent texts, character limit settings, and application information.

## Clipboard Integration

Clipboard functionality supports:

- Copy text
- Paste text

Actions occur through user interaction.

## Text Export Handling

Text content can be exported as a `.txt` file using browser-based file generation.

## Browser Permissions

Required permission:

- Storage

Used for:

- Saving editor text
- Maintaining recent text history
- Storing the auto-save preference
- Saving character limit settings

## Browser API Usage

Text Formatter Pro uses browser APIs to support extension functionality.

Used APIs:

- Chrome Storage API for saving editor text, recent history, auto-save data, and character limit settings
- Clipboard API for copy and paste actions
- Browser Download API for text files

Browser API interactions occur based on user actions and application state updates.

## Privacy & Local Data Handling

Text Formatter Pro follows a local-first approach.

Text processing happens inside the browser without external servers.
Extension data is stored locally using the browser storage system.


## Cross-Browser Compatibility

Supported:

- Google Chrome
- Microsoft Edge
- Brave

## Error Handling

The application includes input validation to prevent invalid operations.

Validation is applied to user input before processing text operations.

## Performance Considerations

The application uses modular components, reusable utility functions, and local text processing to keep operations efficient.

Browser storage usage is limited to required extension data.

## Code Organization

The codebase separates responsibilities across different layers.

- Components manage interface rendering
- Context manages shared state
- Hooks manage reusable logic
- Utilities manage text operations

This structure improves maintainability and future feature development.

## Build Process

Vite handles:

- Development server
- Production build generation
- Bundling React application files for the Chrome Extension


## Technical Limitations

Current limitations:

- Requires Chrome Extension API support
- Local data depends on browser storage availability

## Future Technical Improvements

Possible improvements:

- Additional text processing utilities
- More reusable hooks
- Extended export functionality
- Enhanced configuration options
