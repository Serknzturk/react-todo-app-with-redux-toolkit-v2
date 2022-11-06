# React To Do App with Redux Toolkit V2

A react application with a smooth GUI for storing tasks.

![React To Do App Screenshot](http://github.com/Serknzturk/react-todo-app-with-redux-toolkit-v2/blob/main/public/screenshot.jpg?raw=true)

![React To Do App Screenshot](http://github.com/Serknzturk/react-todo-app-with-redux-toolkit-v2/blob/main/public/screenshot-dark.jpg?raw=true)

## Installation

 1. Clone the repo by entering `gh repo clone Serknzturk/react-todo-app-with-redux-toolkit-v2` to your terminal
 2. Open app directory in your Terminal
 3. CD into server directory `cd .\server\`
 4. Start server `npm run watch`
 5. Open another terminal in root app directory
 6. Start the app by running `npm run start

## Case Details
Project has been built for a special case request. Here you can find the requested case details along with their implementation.

### User Story
**As a User, i want to check my to-do list items.**\
User can check/uncheck for changing the task complete status.

**As a User, i want to add new to-do item.**\
User can add new to do tasks easily by clicking on Add button

**As a User, i want to remove some to-do item**\
User can easily remove any to do task just by clicking the garbage icon at the right side of a task.

### Notes
**Create simple GUI**\
GUI built as simple as possible. Given example design exactly applied to the app without making any changes.

**Project should be support GET/POST actions**\
In order to use GET/POST methods, a server application has been included into project as a monorepo. Server does not connect to any database and uses a mock js object.

**Use Material-UI for React or custom components**\
The entire UI built by using Material-UI style and components. No additional UI has been integrated as per the case request.

**Use Fake Backend Provider or mocked Json file**\
A fake server without database integration has been added as monorepo in order to use GET/POST methods actively, 

**Support fully responsive design**\
Design is fully responsive and tested on different screen resolutions.

**Use Sass/Scss css pre-processor**\
No Sass/Scss has been used in this app. Due to the example design, UI has been built via Material-UI. Thus, no additional CSS was required. 

**Use CDD (Component Driven Development) approach**\
Most components has been integrated from Material-UI. Additional components can be found in the components directory. App built on component architecture.
