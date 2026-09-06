# Text Formatter Pro Troubleshooting Guide

## Table of Contents

- [Overview](#overview)
- [Issue](#issue)
  - [Installation & Build Issues](#installation--build-issues)
  - [Extension Loading & Activation Issues](#extension-loading--activation-issues)
  - [Feature-Specific Issues](#feature-specific-issues)
  - [Permission Issues](#permission-issues)
  - [Browser Compatibility Issues](#browser-compatibility-issues)
- [FAQ](#faq)

## Overview

Text Formatter Pro runs inside the browser and performs text formatting operations locally.

Common issues are usually related to:

- Extension installation
- Browser permissions
- Local storage settings
- Browser cache
- Extension configuration

### Installation & Build Issues

**Problem:** Extension build fails or the extension cannot be installed.

**Cause:** Missing project dependencies or an incorrect build folder.

**Solution:**

Install the dependencies:

```bash
npm install
```

Build the extension:
```bash
npm run build
```

Then select the generated dist folder when using Load unpacked in Chrome.

### Extension Loading & Activation Issues

**Problem:** Text Formatter Pro does not appear in Chrome or does not load correctly.

**Cause:** The extension may be disabled or the wrong folder may have been selected.

**Solution:**

1. Open:

```text
chrome://extensions/
```
2.Enable Developer Mode.
3.Select the generated dist folder.
4.Click Reload on Text Formatter Pro.
