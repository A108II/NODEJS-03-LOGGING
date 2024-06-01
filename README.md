# README

## Overview
This README provides a summary of setting up and using a Node.js application that involves event logging, managing file operations, and using asynchronous and synchronous techniques. The project demonstrates handling custom events, creating and managing log files, and installing and managing dependencies using Node.js packages.

## Dependencies
The project uses the following Node.js packages:
- `date-fns`: For formatting dates.
- `uuid`: For generating unique identifiers (UUIDs).
- `fs` and `fsPromises`: For file system operations.
- `path`: For handling and transforming file paths.
- `events`: For creating and managing custom events.

## Installation

### Installing Dependencies
1. **Install Nodemon**:
   ```bash
   npm i nodemon -g
   ```
   - **npm**: The Node Package Manager, used to install and manage Node.js packages.
   - **i** or **install**: The command to install a package.
   - **nodemon**: The name of the package you want to install (in this case, Nodemon).
   - **-g**: The global flag, indicating that you want to install the package globally, making it accessible from anywhere in the system.

2. **Initialize Project**:
   ```bash
   npm init
   ```
   - The `npm init` command is used to initialize a new Node.js project and create a `package.json` file, which contains metadata about the project and lists dependencies.

3. **Install Required Packages**:
   ```bash
   npm i date-fns uuid
   ```

4. **Install Nodemon as a Dev Dependency**:
   ```bash
   npm i nodemon --save-dev
   ```
   or
   ```bash
   npm i nodemon -D
   ```
   - Tools like Nodemon are useful during development but not needed in production. Using `--save-dev` helps manage these dependencies appropriately.

### Project Setup
1. **Create `package.json` Scripts**:
   - Add start and dev scripts to `package.json`:
     - `"start": "node index"`
     - `"dev": "nodemon index"`

2. **Use `.gitignore`**:
   - Create a `.gitignore` file and add `node_modules` to it to avoid pushing the directory to GitHub.

### Additional Notes on `package.json`
- Dependencies are listed with their version numbers. For example:
  ```json
  "dependencies": {
    "uuid": "^9.0.1"
  }
  ```
  - Here, `^9.0.1` indicates the major version is `9`, the minor version is `0`, and the patch is `1`. The caret `^` allows updates to the minor version and patch but not the major version. Tilde `~` allows updates to the patch only. An asterisk `*` uses the latest version. If we don't specify anything it won't update the current version. 
- To install a specific version of a dependency, use:
  ```bash
  npm i dependencyName@version
  ```
- To check for updates for packages, use:
  ```bash
  npm update
  ```
- To uninstall any dependency, use:
  ```bash
  npm uninstall dependencyName -D
  ```

## Usage

### Running the Application
- **Development**:
  - Use `npm run dev` to run the application with Nodemon for automatic restarts on file changes.
- **Production**:
  - Use `npm start` to run the application.

### Event Logging
The application logs events with a timestamp and a unique identifier. It checks for the existence of a directory and file, creates them if necessary, and writes log entries asynchronously.

### Handling Custom Events
The application uses the `events` module to create a custom event emitter. Events are emitted and handled, triggering the logging functionality.

## Conclusion
This guide summarizes the setup and functionality of a Node.js application for logging events, managing file operations, and handling custom events. By following these instructions, you can manage dependencies, use development tools like Nodemon, and implement efficient file handling and event-driven systems in Node.js.