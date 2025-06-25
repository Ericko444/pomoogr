# POMOOGR - A Retro Pomodoro Timer



**POMOOGR** is a Pomodoro timer application with a nostalgic, old-school CRT terminal aesthetic. It's designed to help you stay focused on your tasks by breaking down work into manageable intervals, separated by short breaks.

This project is built with a modern tech stack including **React**, **TypeScript**, and **Vite**, and styled with **Tailwind CSS** to achieve a unique, retro look and feel.

---

## ✨ Features

*   **Classic Pomodoro Workflow**: Cycle through focused work sessions, short breaks, and long breaks.
*   **Authentic Retro UI**: Immerse yourself in a terminal-style interface complete with a CRT scanline effect, pixelated font, and green-on-black color scheme.
*   **Customizable Sessions**: Easily adjust the duration of work, short breaks, and long breaks via the settings modal.
*   **Persistent Settings**: Your custom timer settings are automatically saved to your browser's local storage.
*   **Dynamic Status Bar**: Get real-time feedback on the timer's status, your actions, and the current time.
*   **Changing ASCII Art**: A friendly tomato-like character changes its form to keep you company through your work cycles.
*   **Helpful Keyboard Shortcuts**: Control the application without leaving your keyboard.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| `S` | **S**tart the current timer |
| `P` | **P**ause the current timer |
| `R` | **R**eset the current timer session |
| `F1`| Open/Close the **H**elp modal |
| `F2`| Open/Close the **S**ettings modal |
| `Esc`| Close any open modal |

---

## 🛠️ Tech Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Linting**: [ESLint](https://eslint.org/) with TypeScript-ESLint

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (v18 or newer recommended) and [npm](https://www.npmjs.com/) installed on your system.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/pomoogr.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd pomoogr
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`. The server supports Hot Module Replacement (HMR), so changes you make to the code will be reflected in the browser instantly.

---

## 📦 Available Scripts

In the project directory, you can run:

*   `npm run dev`
    *   Starts the development server with HMR.

*   `npm run build`
    *   Builds the app for production to the `dist` folder. It correctly bundles React and optimizes it for the best performance.

*   `npm run lint`
    *   Lints the source code using ESLint to find and fix problems in your code.

*   `npm run preview`
    *   Serves the production build from the `dist` folder locally to preview it before deployment.

---

## 📁 Project Structure

The source code is organized to be modular and maintainable. Key directories inside `src/` include:

```
src/
├── components/
│   ├── features/      # Components for specific features (Pomodoro, Settings)
│   ├── layout/        # Structural layout components (e.g., TerminalLayout)
│   └── ui/            # Generic, reusable UI elements (e.g., Modal, Button)
├── types/             # TypeScript type definitions (pomodoro.ts)
├── App.tsx            # Main application component and state management
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind CSS layers
```