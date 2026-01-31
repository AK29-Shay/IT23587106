# IT23587106 - Tamil Transliteration Testing Suite

[![Playwright Tests](https://img.shields.io/badge/Tests-Playwright-green)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

## 📋 Project Overview

This project contains automated end-to-end tests for validating **Tamil Transliteration** functionality on [tamil.changathi.com](https://tamil.changathi.com/). The test suite verifies the conversion of Romanized Tamil (Tanglish) text to Tamil Unicode characters.

## 🎯 Test Coverage

The test suite covers various scenarios including:

| Category | Description |
|----------|-------------|
| **Greetings** | Daily greeting phrases |
| **Tenses** | Present, Past, Future tense conversions |
| **Grammar** | Simple, Imperative, Interrogative, Negation |
| **Special Cases** | Numbers, Punctuation, Slang expressions |
| **Plural Forms** | Plural noun phrases |

### Test Case Categories

- **Pos_Fun_0001-0009**: Positive functional tests for short phrases (≤30 characters)
- Various domains: Greeting, Daily language, Slang, Punctuation/numbers

## 🛠️ Tech Stack

- **Test Framework**: [Playwright](https://playwright.dev/) v1.58.1
- **Language**: TypeScript
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/IT23587106.git
   cd IT23587106
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🚀 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests with UI mode
```bash
npx playwright test --ui
```

### Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

### Run a specific test
```bash
npx playwright test -g "Pos_Fun_0001"
```

### Generate HTML report
```bash
npx playwright show-report
```

## 📁 Project Structure

```
IT23587106/
├── IT23587106.ts          # Main test file with all test cases
├── playwright.config.ts   # Playwright configuration
├── package.json           # Project dependencies
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

## ⚙️ Configuration

The Playwright configuration (`playwright.config.ts`) includes:

- **Test Directory**: Root folder (`./`)
- **Test Match Pattern**: `**/*.ts`
- **Timeout**: 30 seconds per test
- **Browser Mode**: Headless (default)

## 📝 Test Case Format

Each test case follows the naming convention:
```
Pos_Fun_XXXX - [Description]
```

Test metadata includes:
- **Domain**: Type of text (Greeting, Daily language, Slang, etc.)
- **Grammar**: Grammatical structure (Simple, Imperative, etc.)
- **Length**: S (Short ≤30 chars), M (Medium), L (Long)

## 🔍 Validation Criteria

Tests validate that:
1. Input text is successfully converted
2. Output contains Tamil Unicode characters (range: `\u0B80-\u0BFF`)
3. Original Romanized text is transformed

## 👨‍💻 Author

**Student ID**: IT23587106

## 📄 License

This project is licensed under the ISC License.

---

*This project is part of the ITPM module at SLIIT.*
