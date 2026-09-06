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

### Feature-Specific Issues

**Problem:** Formatting, text statistics, clipboard, or other features do not work correctly.

**Cause:** The feature may not be receiving valid text input, or the extension state may not be updated correctly.

**Solution:**

- Verify that text exists in the editor.
- Reload the extension.
- Check the specific feature again.
- For formatting issues, verify that the correct formatting action is selected.
- For statistics issues, edit the text again to trigger an update.
- For clipboard issues, verify that clipboard content is available.

### Permission Issues

**Problem:** Text Formatter Pro features that require browser permissions are not working.

**Cause:** The required `storage` permission may not be available or enabled.

**Solution:**

- Check the extension permissions in Chrome.
- Verify that the `storage` permission is available.
- Reload the extension after updating permissions.

### Browser Compatibility Issues

**Problem:** Text Formatter Pro does not work correctly in the browser.

**Cause:** The browser may not be supported or may not be up to date.

**Solution:**

- Use Google Chrome, Microsoft Edge, or Brave.
- Update the browser to the latest version.
- Reload the extension after updating the browser.

## FAQ

### Q1

**Q:** How do I install Text Formatter Pro?

**A:** Build the extension using `npm run build`, open `chrome://extensions/`, enable **Developer Mode**, and select the generated `dist` folder using **Load unpacked**.

### Q2

**Q:** Why are my saved texts or preferences missing?

**A:** Check that browser storage has not been cleared and that **Auto Save** is enabled. Clearing browser storage can remove recent text history, saved preferences, and auto-saved text.

### Q3

**Q:** Why is a formatting feature not working?

**A:** Verify that text exists in the editor and that the correct formatting action is selected. If the issue continues, reload the extension and try again.
