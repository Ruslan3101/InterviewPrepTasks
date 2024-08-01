## Overview

This project is created to practice FrontEnd hard skills. The main goal is to understand and implement various front-end tasks using React, TypeScript, and other modern web technologies.

Before starting to change the code, please create a new branch with the name of the task you are working on (e.g., `react-todo` or `js-promises` or `css-flexbox`).
Always pull a new version of the app

## Features

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing in the application.
- **Axios**: For making HTTP requests.
- **TypeScript**: For static type checking.
- **Tailwind CSS**: For utility-first CSS styling.
- **Jest and Testing Library**: For testing components and ensuring code quality.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ruslan3101/InterviewPrepTasks
   npm i
   ```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`: Starts the development server.

Run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Folder Descriptions

- `app/`: Contains the main application setup, routes, and global styles.

  - `routes/`: Contains the routing components like `dashboard.tsx`, `errorPage.tsx`, etc.
  - `styles/`: Global styling files.
  - `App.tsx`: The main application component.

- `features/`: Contains all feature-specific code, organized by technology (CSS, JavaScript, React, TypeScript).

  - `css/`: Contains CSS-related features.
  - `db/`: Database-related features.
  - `js/`: JavaScript-related features.
    - Each feature (e.g., `promise`, `asyncAwait`) has its own folder.
    - Inside each feature folder, the code is further divided into `answer/`, `fix/`, and `create/` folders.
  - `react/`: React-related features.
    - Similar structure to `js/`, with `answer/`, `fix/`, and `create/` folders for each feature.
  - `ts/`: TypeScript-related features.

- `shared/`: Contains shared components and utilities.
  - `components/`: Reusable components shared across different features.
    - `taskAnswer/`, `taskCreate/`, `taskFix/`: Components related to task operations.
    - `taskAnswerComponents.ts`, `taskCreateComponents.ts`, `taskFixComponents.ts`: Component maps for task operations.
  - `ui/`: UI-related shared components like `FixCodeMessage.tsx`, `OpenConsoleMessage.tsx`.

## How to Navigate the Project

1. **Feature Development**:

   - Identify the feature you want to work on (e.g., `todoList`, `promise`).
   - Navigate to the respective folder under `features/`.
   - You will find subfolders for different operations: `answer/`, `fix/`, and `create/`.

2. **Shared Components**:

   - Shared components and utilities are located in the `shared/` folder.
   - Use the `taskAnswer/`, `taskCreate/`, and `taskFix/` folders for task-related components.

3. **Routing and Global Styles**:

   - The main application routes and styles are located in the `app/` folder.
   - Modify or add routes in the `routes/` folder as needed.

4. **Adding New Features**:

   - Create a new folder under the appropriate technology in `features/`.
   - Add subfolder (`answer/`, `fix/`, `create/`) and components as required.
   - Update any necessary shared components or routing configurations.

## How to Work with This App

5. **Check the Answer**: First, check the answer in the `Answer` file and understand the code.
6. **Fix the Code**: Then try to fix the code in the `Fix` file.
7. **Write a New App**: Finally, begin to write a new app in the `Create` file.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Contribution Guidelines

1. **Branching**: Create a new branch for each feature or bug fix.
   [Commits must be done by following these rules](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
2. **Pull Requests**: Submit a pull request with a clear description of changes made.
3. **Code Review**: Ensure your code follows the project's coding standards and is reviewed by at least one other collaborator.

Feel free to reach out if you have any questions or need further clarification on the project structure.

## Contact

For any questions, please contact Ruslan at [Email](ruslanlutfullin95@gmail.com)
