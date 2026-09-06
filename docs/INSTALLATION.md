# Text Formatter Pro Installation Guide

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Verification](#verification)
- [Troubleshooting](#troubleshooting)

## Overview

Text Formatter Pro is a React-based Chrome Extension that provides text formatting and cleanup utilities directly inside the browser.

This document explains the prerequisites, installation process, verification steps, and troubleshooting for setting up the extension locally.

## Prerequisites

Before installing Text Formatter Pro, ensure the following are available:

- Git
- Google Chrome or a Chromium-based browser
- Node.js
- npm package manager

Verify the installations using:

```bash
git --version
node --version
npm --version
```

## Installation

Text Formatter Pro can be installed locally as a Chrome Extension using the production build.

### Install from VSIX Package

1. Clone the project repository:
```bash
git clone <repository-url>
```

2.Navigate to the project directory:
```bash
cd text-formatter-pro
```

Install the project dependencies:
```bash
npm install
```

Create the production build:
```bash
npm run build
```

The production-ready `dist` folder is generated.
6. Open Google Chrome and navigate to:
 ```bash
chrome://extensions/
```
7.Enable Developer Mode.

8.Click Load unpacked.

9.Select the generated `dist` folder.

10. Confirm that **Text Formatter Pro** appears in the Chrome Extensions list.

11. The extension is now installed and ready to use.
