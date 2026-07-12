# Text Formatter Pro Troubleshooting Guide

This guide helps users identify and resolve common issues while installing, running, or using Text Formatter Pro.

## Table of Contents

- [Version Information](#version-information)
- [Overview](#overview)
- [Before You Begin](#before-you-begin)
- [Expected vs Actual Behavior](#expected-vs-actual-behavior)
- [General Troubleshooting Steps](#general-troubleshooting-steps)
- [Common Issues](#common-issues)
- [Installation & Build Issues](#installation--build-issues)
- [Extension Loading & Activation Issues](#extension-loading--activation-issues)
- [Feature-Specific Issues](#feature-specific-issues)
- [Permission Issues](#permission-issues)
- [Browser Compatibility Issues](#browser-compatibility-issues)
- [Viewing Extension Logs](#viewing-extension-logs)
- [Resetting Application Data](#resetting-application-data)
- [Known Issues & Workarounds](#known-issues--workarounds)
- [Getting Support](#getting-support)

## Version Information

**Application:** Text Formatter Pro  
**Version:** 1.0.0  
**Platform:** Chrome Extension  
**Manifest Version:** Manifest V3  

## Overview

Text Formatter Pro runs inside the browser and performs text formatting operations locally.

Common issues are usually related to:

- Extension installation
- Browser permissions
- Local storage settings
- Browser cache
- Extension configuration

## Before You Begin

Before troubleshooting, verify:

- Text Formatter Pro is installed correctly
- Browser is updated
- Extension permissions are enabled
- Latest extension build is installed

## Expected vs Actual Behavior

When investigating issues, compare:

| Expected Behavior | Actual Behavior |
|---|---|
| What should normally happen | What is currently happening |

This helps identify the source of the problem.

## General Troubleshooting Steps

Try these steps first:

1. Refresh the extension.
2. Close and reopen the extension popup.
3. Restart the browser.
4. Verify the extension is enabled.
5. Reload the extension.

## Common Issues

Common issues and solutions are listed below.

## Installation & Build Issues

### Extension build fails

Possible causes:

- Missing dependencies
- Build configuration issue

Solutions:

Install dependencies:

```bash
npm install
```

Rebuild:

```bash
npm run build
```

## Extension Loading & Activation Issues

### Extension does not appear in Chrome

Possible causes:

- Extension disabled
- Incorrect folder selected

Solutions:

1. Open:

```text
chrome://extensions/
```

2. Enable Developer Mode.
3. Select the generated dist folder.
4. Reload extension.

## Feature-Specific Issues

### UI Display Issues

#### Interface appears incorrectly

Solutions:

- Reload extension
- Update browser
- Install latest build

### Text Editor Issues

#### Text does not appear or update

Solutions:

- Verify text input
- Refresh extension popup
- Reset preferences if required

### Formatting & Cleaning Issues

#### Formatting buttons do not update text

Check:

- Text exists in editor
- Correct action is selected

Supported operations:

- Uppercase conversion
- Lowercase conversion
- Capitalization
- Extra space removal
- Duplicate line removal
- Blank line trimming
- Line sorting

### Find & Replace Issues

#### Replacement does not work

Check:

- Search text exists
- Replacement value is correct
- Text field contains content

### Text Statistics Issues

#### Statistics are not updating

Try:

- Editing text again
- Reloading extension

Statistics update automatically when content changes.

### Copy, Paste & Download Issues

#### Paste option does not work

Possible causes:

- Clipboard access restriction
- No text available in clipboard

Solutions:

- Check copied content
- Try manual paste
- Reload extension

#### Download does not start

Check:

- Text exists before downloading
- Browser allows downloads

### Menu & Modal Issues

#### Menu options do not open

Solutions:

- Close and reopen menu
- Reload extension

Applies to:

- Recent Texts
- Character Limit
- About Section

### Undo & Auto Save Issues

#### Undo does not restore text

A previous text change exists

Formatting or editing action was performed before using Undo
Undo restores the last available text state.

#### Auto Save does not restore content

Check:

- Auto Save is enabled
- Browser storage has not been cleared

### Text History Issues

#### Data Recovery

If browser storage is cleared:

- Recent text history may be removed
- Saved preferences may reset
- Auto-saved text may no longer be available

Export important text using Download when needed.

#### Recent texts disappeared

Possible causes:

- History manually cleared
- Browser storage reset

Deleted history cannot be restored.

### Character Limit Issues

#### Unable to enter more text

Solutions:

- Check configured character limit
- Increase limit from settings

### Preferences & Storage Issues

Stored information includes:

- Auto Save preference
- Recent text history
- Character limit settings
- Text in text editor

If issues occur:

- Check browser storage settings
- Reset preferences

## Permission Issues

Required permission:

- Storage

Used for:

- Saving preferences
- Maintaining recent text history

Text Formatter Pro processes text locally and does not require external data transfer for formatting features.

## Browser Compatibility Issues

Supported browsers:

- Google Chrome
- Microsoft Edge

Use updated browser versions for the best experience.

## Viewing Extension Logs

To inspect errors:

1. Open:

```text
chrome://extensions/
```

2. Enable Developer Mode.
3. Open extension details.
4. Open inspection tools and review console logs.

## Resetting Application Data

Steps:

1. Open extension menu.
2. Select Reset Preferences(Auto save on/off)
3. Restart extension.

## Known Issues & Workarounds

| Issue | Workaround |
|---|---|
| Clipboard temporarily unavailable | Reload extension |
| Previous text missing | Check Auto Save settings |
| Extension changes not visible | Reload extension |
| Character limit reached | Increase limit from settings |

## Getting Support

When reporting issues include:

- Browser name and version
- Extension version
- Issue description
- Steps to reproduce
- Screenshots if available