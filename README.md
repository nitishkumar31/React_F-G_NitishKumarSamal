# Feedback Grievance Form

This project is a feedback form for a restaurant, designed to collect customer feedback on various aspects of their dining experience. The form is built using React JS, Tailwind and Formik, with validation handled by Yup.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x)
- npm

## Installation

To set up the project, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/nitishkumar31/React_F-G_NitishKumarSamal.git
    ```

2. **Install dependencies:**

    Using npm:
    ```sh
    npm install
    ```


## Running the Project

To start the development server, run:

Using npm:
```sh
npm run dev
```
The application will be available at `http://localhost:5173`.


## Project Structure

The project structure is as follows:

```
React_F-G_NitishKumarSamal/
├── public/
│   └── ...
├── src/
│   ├── components/
│   |   ├── FeedbackForm.jsx
│   |   ├── FormDetails.jsx
│   |   └── SuccessPopup.jsx
│   ├── pages/
│   |   ├── FeedbackFormPage.jsx
│   |   ├── NotFound.jsx
│   │   └── SubmissionsPage.jsx
│   ├── App.js
│   ├── main.js
│   └── index.css
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── .eslintrc.cjs
```


## Dependencies

The project relies on the following major dependencies:
- React
- Formik
- Yup
- Tailwind CSS
- react-router-dom
- react-phone-number-input
- libphonenumber-js
