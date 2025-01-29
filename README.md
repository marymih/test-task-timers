# Countdown Timers

First test task for a frontend developer as part of the Hexlet and Habr Career challenge.

## Description
A single-page application that allows users to create countdown timers.
Each timer operates independently, and the user can see the countdown in real-time and can stop and/or delete the timer at any time.

## Requirements
- **Timer Creation:** The user enters the time in seconds and starts the timer.
- **Interface Updates:** The timer decreases every second and updates on the screen.
- **Asynchronous Behavior:** 'setTimeout' or 'setInterval' is used for asynchronous updates.
- **Closures:** Timer logic is implemented using closures to ensure each function "knows" its state.
- **Context Handling:** Functions correctly handle `this` when creating and managing timers.

## Functionality

- **Adding a New Timer:** Input field for the time (in seconds) and a button to start a new timer.
- **Displaying Timers:** Each timer is displayed in a list with the remaining time.
- **Stop and Delete Timer Button:** A button for stopping and deleting the timer manually.

### Example Workflow:
- The user enters 10 in the input field and clicks "Add timer."
- A timer with an initial value of 10 appears on the screen and decreases every second.
- When the timer reaches 0, it is automatically deleted.
- The user can manually delete the timer before it finishes.

## Launch Instructions
1. Clone the repository:
  ```sh
  git clone https://github.com/marymih/test-task-timers.git
  ```

2. Navigate to the project directory:
  ```sh
  cd test-task-timers
  ```

3. Open the index.html file in your browser:
  ```sh
  open index.html  # for macOS
  start index.html # for Windows
  xdg-open index.html # for Linux
  ```

## Technologies Used

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

