# TodoListApp-React-Native
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>TodoListApp-React-Native</h1>
<h3>◦ HTTPStatus Exception: 401</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Expo-000020.svg?style&logo=Expo&logoColor=white" alt="Expo" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/BoualamHamza/TodoListApp-React-Native.git?style&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/BoualamHamza/TodoListApp-React-Native.git?style&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/BoualamHamza/TodoListApp-React-Native.git?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/BoualamHamza/TodoListApp-React-Native.git?style&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running TodoListApp-React-Native](#-running-TodoListApp-React-Native)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

This a simple TodoList in React-native  
Here's a summary of the `TodoList` and `TodoItem` components:

### TodoList Component:

- The `TodoList` component is responsible for managing and displaying a to-do list.
- It uses the `useState` hook to manage state variables like `newTodoText`, `todos`, `count`, and `currentFilter`.
- It includes functions for CRUD operations, such as `addNewTodo`, `deleteTodo`, `updateItem`, `checkAll`, and `checkNone`.
- The `useEffect` hook is used to update the `count` when there are changes in the `todos` array.
- It provides buttons to filter and display tasks based on their completion status.
- It renders a list of to-do items using a `FlatList`.
- It includes buttons to check all tasks or uncheck all tasks.

### TodoItem Component:

- The `TodoItem` component represents an individual to-do item within the list.
- It uses the `useState` hook to manage the `isEnabled` state, which determines whether the to-do item is marked as done or not.
- It updates the text style based on the `isEnabled` state to show a line-through effect for completed tasks.
- It renders a text description of the to-do item, a Switch component to mark it as done or not, and a delete button.
- The `useEffect` hook is not used in the provided code but can be used to keep the local state in sync with changes in the props, especially for the `done` property.
- Both components work together to create a functional to-do list application with the ability to add, delete, update, and filter tasks, as well as check or uncheck all tasks.


---

## 📦 Features

CRUD operations
---
**updateCount()**:  is used to update the count state when the number of completed to-do items changes.
**deleteTodo()**:  is used to delete a to-do item by filtering it out of the todos array and updating the count state.
**addNewTodo()**: is called to add a new to-do item to the list. It first checks if the newTodoText is empty and logs a message if it is. Then, it creates a new to-do object and appends it to the todos array, resetting the newTodoText input field in the process.
**updateItem()** is used to update the completion status of a to-do item by toggling the done property. It also updates the count state accordingly.
checkAll marks all to-do items as completed.

## 📂 Repository Structure

```sh
└── TodoListApp-React-Native/
    ├── .gitignore
    ├── App.js
    ├── Helpers/
    │   └── todoData.js
    ├── app.json
    ├── assets/
    │   ├── adaptive-icon.png
    │   ├── favicon.png
    │   ├── icon.png
    │   ├── splash.png
    │   └── trash-can-outline.png
    ├── babel.config.js
    ├── components/
    │   ├── TodoItem.js
    │   └── TodoList.js
    ├── package-lock.json
    └── package.json
```


---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                                      | Summary                   |
| ---                                                                                                       | ---                       |
| [babel.config.js](https://github.com/BoualamHamza/TodoListApp-React-Native.git/blob/main/babel.config.js) | HTTPStatus Exception: 401 |
| [App.js](https://github.com/BoualamHamza/TodoListApp-React-Native.git/blob/main/App.js)                   | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Components</summary>

| File                                                                                                         | Summary                   |
| ---                                                                                                          | ---                       |
| [TodoList.js](https://github.com/BoualamHamza/TodoListApp-React-Native.git/blob/main/components/TodoList.js) | List contains all the todoItem it uses helpers.js to initialize the content |
| [TodoItem.js](https://github.com/BoualamHamza/TodoListApp-React-Native.git/blob/main/components/TodoItem.js) |- The `TodoItem` component represents an individual to-do item within the list.
 |

</details>

<details closed><summary>Helpers</summary>

| File                                                                                                      | Summary                   |
| ---                                                                                                       | ---                       |
| [todoData.js](https://github.com/BoualamHamza/TodoListApp-React-Native.git/blob/main/Helpers/todoData.js) | HTTPStatus Exception: 401 |

</details>

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the TodoListApp-React-Native repository:
```sh
git clone https://github.com/BoualamHamza/TodoListApp-React-Native.git
```

2. Change to the project directory:
```sh
cd TodoListApp-React-Native
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running TodoListApp-React-Native

```sh
npm  start 
```

### 🧪 Tests
```sh
npm test
```

---


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

---

## 👏 Acknowledgments

`- ℹ️ List any resources, contributors, inspiration, etc.`

[↑ Return](#Top)

---
