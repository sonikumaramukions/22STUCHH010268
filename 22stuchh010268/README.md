URL Shortener Web Application - [YOUR_ROLL_NUMBER]
This repository contains the implementation of a client-side URL Shortener web application, developed as part of a technical evaluation. The project includes a React.js frontend and a conceptual logging middleware, designed to meet specified functional and technical requirements.

Table of Contents
Project Overview

Features

Setup and Installation

How to Run

Key Implementation Details

Assumptions

Evaluation Notes

1. Project Overview
This application provides a user-friendly interface for shortening URLs and viewing statistics related to the shortened links. It is built using React.js and Material UI, focusing on robust client-side validation, error handling, and a responsive user experience. A conceptual logging mechanism is integrated to demonstrate observability.

2. Features
URL Shortening:

Allows shortening up to 5 URLs concurrently.

Inputs: Original URL, optional validity period (in minutes), optional custom shortcode.

Displays the shortened URL, along with its creation and expiry times.

URL Statistics:

Displays a list of all shortened URLs (persisted client-side using localStorage).

For each URL: Shows the short URL, original URL, creation/expiry times, total clicks, and detailed click data (timestamp, source, location).

Copy-to-clipboard functionality for shortened URLs.

Detailed view for individual URL click statistics.

User Authentication Flow (Conceptual):

Includes registration and authentication steps interacting with external APIs to obtain client credentials and an access token.

The access token is used for subsequent protected API calls.

Client-Side Validation:

Robust validation for URL format, shortcode constraints (alphanumeric, length), and numerical inputs.

Error Handling:

User-friendly error messages for invalid inputs and API communication failures.

Responsive UI: Designed with Material UI to ensure optimal viewing across various devices (mobile, tablet, desktop).

3. Setup and Installation
To set up and run the project locally:

Clone the repository:

git clone https://github.com/your-username/[YOUR_ROLL_NUMBER].git
cd [YOUR_ROLL_NUMBER]

Navigate to the frontend project directory:

cd Frontend\ Test\ Submission

Install Node.js dependencies:

npm install
# or if you use yarn
yarn install

4. How to Run
Ensure you are in the Frontend Test Submission directory.

Start the development server:

npm start
# or
yarn start

The application will open in your default web browser at http://localhost:3000.

5. Key Implementation Details
React.js (JavaScript/JSX): The entire frontend is built using React functional components and hooks for state management and side effects.

Material UI: All UI components and styling are implemented exclusively using Material UI, ensuring a consistent and responsive design. The custom theme is defined in src/theme.js.

Client-Side Routing: Simple state-based routing is used within App.jsx to switch between the "Shorten URL" and "Statistics" pages, as external routing libraries are not permitted.

API Service (src/services/apiService.js): All interactions with the external evaluation APIs (registration, authentication, URL shortening, statistics) are centralized here. This module handles constructing requests and parsing responses.

Authentication Context (src/context/AuthContext.jsx): Manages the access_token obtained from the authentication API. The token is stored in localStorage for persistence across sessions and automatically loaded/refreshed upon app load.

Client-Side Persistence: Shortened URLs and their associated (simulated) click data are stored in localStorage to persist data between browser sessions, fulfilling the requirement for the Statistics page.

Validation Utilities (src/utils/validation.js): Contains reusable functions for validating various input types (URLs, shortcodes, numbers, email, mobile numbers).

Conceptual Logging (src/services/loggingService.js): This module demonstrates the structure for a logging middleware. Note: Its current implementation uses console.log as a placeholder. In a complete solution, this would be replaced with actual fetch calls to the designated logging API endpoint, including the Authorization: Bearer token.

6. Assumptions
The external evaluation APIs (/register, /auth, /shorten, /stats, /log) are accessible at http://20.244.56.144/evaluation-service.

The accessCode for registration is provided separately to the user (e.g., via email).

The format of the API request bodies and response payloads for URL shortening, statistics, and logging are as inferred from common API design patterns, as explicit schemas were not provided in the evaluation documents for these specific endpoints.

The totalClicks and clickDetails for shortened URLs are simulated client-side for demonstration purposes in the URLShortenerPage and App.jsx. In a real-world scenario, this data would be returned by the /shorten API or fetched from the /stats API.

7. Evaluation Notes
API Integration: The core logic for calling the registration, authentication, URL shortening, and statistics APIs is in src/services/apiService.js. The loggingService.js file is where the actual logging API calls should be implemented.

Error Handling: Error messages are displayed via Material UI Snackbar components.

Code Quality: The project follows a modular structure with clear separation of concerns (components, pages, services, utilities, context).

Responsiveness: The layout adapts to different screen sizes. Please test on various device emulations.

localStorage Usage: Client-side data persistence for shortened URLs is handled using localStorage as indicated by the evaluation context.
