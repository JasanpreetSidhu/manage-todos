# Manage-Todos: Task Management Application

## Overview

This [app](https://jasanpreetsidhu.github.io/manage-todos/) interfaces with a REST API [JSON Placeholder](https://jsonplaceholder.typicode.com/) to provide comprehensive todo list management capabilities. The application enables users to view, add, update, and delete tasks efficiently.

## Key Features

- Fetch and display todos from a REST API
- Add new todos to the list
- Toggle todo status between complete and incomplete
- Remove todos from the list

## Functionality

1. **API Integration**: Utilizes fetch API to send GET, POST, PATCH, and DELETE requests to the backend.
2. **Dynamic DOM Updates**: Employs JavaScript to reflect changes in the user interface in real-time.
3. **Interactive User Experience**: Implements event listeners for seamless task management operations.

## Technical Implementation

- **GET request**: Retrieves existing todos
- **POST request**: Adds new todos
- **PATCH request**: Updates todo status
- **DELETE request**: Removes todos from the list

## Known Limitations

Due to the current use of a mock API:

- New todos are consistently assigned an ID of 201
- Deleting a newly added todo removes the first todo in the list
- Page refreshes reset all modifications

## Future Developments

Will Integrate backend server and database to enable data persistence and resolve current limitations.
