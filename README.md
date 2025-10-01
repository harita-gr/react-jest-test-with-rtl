# How to Test React Apps Using Jest

This project demonstrates unit testing of React applications using Jest and React Testing Library (RTL).
It covers setup, rendering components, queries, event simulation, snapshot testing, and mocking functions — all explained step by step with examples.

## Introduction
Testing is an essential part of building reliable React applications.
- This project will help you:
- Understand Jest and RTL basics
- Write your first test cases
- Run tests in watch mode
- Perform snapshot testing
- Mock functions for isolated component testing

## Tech Stack

- React
- JavaScript
- Jest with RTL
- Node.js

## Pre-requisites

- Node.js and npm are installed on your system

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/harita-gr/react-jest-test-with-rtl.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the test and verify results

```bash
npm run test
```

## Installation and Setup of Jest into your existing React Project
If your app was created with Create React App (CRA), Jest and RTL come pre-installed.
For non-CRA projects, install Jest and RTL manually:

```
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```
Update your `package.json` script to enable testing:

```
"scripts": {
  "test": "jest"
}
```
Run all test files ending with .test.js using:

```
npm run test
```

## 📂 Project Structure
```
src/
  ├── App.jsx
  ├── App.test.js
  └── components/
      ├── Button.jsx
      └── Button.test.js
```

## Jest Cheat Sheet
| Command                                         | Description                                         |
| ----------------------------------------------- | --------------------------------------------------- |
| `npm run test`                                  | Run all tests once                                  |
| `npm run test -- --watch`                       | Run tests in **watch mode**, re-runs on file change |
| `npm run test -- --coverage`                    | Show code coverage report                           |
| `npm run test -- src/components/Button.test.js` | Run tests only for a specific file                  |
| `npm run test -- -t "renders button"`           | Run tests matching a specific test name pattern     |


## 📌 Resources

[Jest Documentation](https://jestjs.io/ )

[React Testing Library Docs](https://testing-library.com/docs/ )
