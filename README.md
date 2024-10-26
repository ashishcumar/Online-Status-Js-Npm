# Online Status JS 🌐

Online Status JS is a lightweight npm package designed to check and monitor internet connectivity in JavaScript-based applications. It offers a simple and efficient way to determine whether the user is connected to the internet, enabling developers to create more responsive and user-friendly web experiences.

![Build](https://img.shields.io/github/actions/workflow/status/ashishcumar/useScrollTracker/publish.yml)
![Fast](https://img.shields.io/badge/fast-4kb-blue)
![Lightweight](https://img.shields.io/badge/lightweight-4kb-green)
![Npm-Version](https://img.shields.io/npm/v/online-status-js.svg)
![Trusted](https://img.shields.io/badge/trusted-orange)
![No Dependency](https://img.shields.io/badge/dependencies-none-brightgreen)


## 🚀 Installation

You can install Online Status JS via npm:

```bash
npm install online-status-js

// Import the checkOnlineStatus function into your JavaScript file: 
import { checkOnlineStatus } from 'online-status-js';


// Use the checkOnlineStatus function to check internet connectivity:
const isConnected = checkOnlineStatus();


// The checkOnlineStatus function returns true if the user is connected to 
// the internet and false if not.

if (isConnected) {
  console.log('You are connected to the internet!');
} else {
  console.log('You are offline.');
}


```

## Features

Online Status JS provides the following key features:

- **Framework-Agnostic:** Works seamlessly with React, Vue.js, Angular, and other JavaScript frameworks.
- **Real-Time Connectivity:** Monitor online status in real-time for responsive web applications.
- **Cross-Platform Compatibility:** Compatible with all major browsers and platforms.
- **Client-Side Networking:** Provides client-side network monitoring for enhanced user experience.


## API Reference

### `checkOnlineStatus()`

The `checkOnlineStatus` function is used to check internet connectivity.

- **Returns:** A boolean value (`true` if the user is connected; `false` if the user is offline).


## Issue/Error
For any hiccups with the package, drop an email to **Kumarashish87998@gmail.com** with **"Error || Online Status JS"** as the subject. 📧