# URL Shortener Web Application - [22STUCHH010268]

This repository contains the implementation of a client-side URL Shortener web application, developed as part of a technical evaluation. The project includes a React.js frontend and a conceptual logging middleware, designed to meet specified functional and technical requirements.

---

## 📑 Table of Contents
- [Project Overview](#1-project-overview)
- [Features](#2-features)

---

## 1. Project Overview

This application provides a user-friendly interface for shortening URLs and viewing statistics related to the shortened links. It is built using **React.js** and **Material UI**, focusing on robust client-side validation, error handling, and a responsive user experience. A conceptual logging mechanism is integrated to demonstrate observability.

---

## 2. Features

### 🔗 URL Shortening
- Allows shortening up to 5 URLs concurrently.
- Inputs: Original URL, optional validity period (in minutes), optional custom shortcode.
- Displays the shortened URL, along with its creation and expiry times.

### 🔐 User Authentication Flow (Conceptual)
- Includes registration and authentication steps interacting with external APIs to obtain client credentials and an access token.
- The access token is used for subsequent protected API calls.

### ✅ Client-Side Validation
- Robust validation for:
  - URL format.
  - Shortcode constraints (alphanumeric, length).
  - Numerical inputs.

### ❗ Error Handling
- User-friendly error messages for:
  - Invalid inputs.
  - API communication failures.

### 📱 Responsive UI
- Built with **Material UI** for responsive design across devices (mobile, tablet, desktop).

---
