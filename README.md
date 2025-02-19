# React Router v6 useParams Hook Usage Error

This repository demonstrates a common error when using the `useParams` hook in React Router v6.  The `useParams` hook must be used *inside* a component that is rendered by a `Route` component.  Using it outside this context will result in undefined values or runtime errors.

## Problem

Attempting to access the `useParams` hook outside of a component using the `Route` or `Routes` component leads to undefined values or errors.

## Solution

Ensure the `useParams` hook is used within a component that is rendered by a `Route` component.  The example in `bugSolution.js` demonstrates the correct usage.

## How to reproduce the error

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output and the behavior of the application, noting the error in `bug.js` and the correct implementation in `bugSolution.js`. 