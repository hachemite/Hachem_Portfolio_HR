---
title: 'Library Management System'
year: 2025
description: 'A Java desktop application with a graphical user interface to manage library books and authors using a MySQL database.'
stack: ['Java', 'Swing', 'MySQL', 'JDBC', 'WAMP']
image: 'https://github.com/user-attachments/assets/f5eba404-e70f-4750-a474-e1e966520dac'
featured: true
visible: true
---

## The Problem

Keeping track of library inventories manually or using basic spreadsheets quickly becomes unmanageable as a collection grows. Librarians need a dedicated, user-friendly tool to manage book entries, track authors, update publication years, and monitor the physical availability of each item.

## The Solution

I developed a desktop application using **Java** and **Swing** to provide an intuitive Graphical User Interface (GUI) for library management. The application connects to a local **MySQL** database to ensure reliable data persistence and rapid querying.

![Library Management App Interface](https://github.com/user-attachments/assets/f5eba404-e70f-4750-a474-e1e966520dac)

### Core Functionalities

The application features a fully functional CRUD (Create, Read, Update, Delete) system integrated with a dynamic `JTable` for data visualization:

- **Add / Edit Books:** Users can input comprehensive book details, including Title, Publication Year, Author, Genre, Cover Image, and Availability Status (Existence).
- **Delete Records:** Easily remove outdated or lost books from the database.
- **Advanced Search:** Users can filter the library database using multiple criteria (Title, Year, Author, Genre, or a General keyword search).
- **Comprehensive View:** Displays all books and their associated authors in a clean, responsive table.

**Watch the Application in Action:**

<video src="https://github.com/user-attachments/assets/315a9d35-a19a-444f-8836-cd63d06f4e75" controls="controls" muted="muted" style="max-width: 100%;"></video>

_(Alternative Demo)_
<video src="https://github.com/user-attachments/assets/463f3106-1c99-4fd8-bb4b-7100d81b8c18" controls="controls" muted="muted" style="max-width: 100%;"></video>

---

## How to Run the Project

To run this application locally, you will need to set up a local web server environment and have Java installed.

### 1. Database Setup (WAMP)

- Download and install **WAMP Server**.
- Ensure the MySQL service is running and listening on the default port **3306**.
- Open phpMyAdmin and import the provided SQL files (located in the `database` folder) to create the required tables and seed the initial data.

### 2. Launching the Application

Once the WAMP server is running, you can launch the application using one of the following methods:

- **Windows Executable:** Simply double-click the `project.exe` file.
- **Java Archive (JAR):** Open your terminal and run the following command:
  ```bash
  java -jar project.jar
  ```

```

* **From an IDE:** Open the project in your preferred Java IDE (like Eclipse or IntelliJ), navigate to `src/Gestion_Livres/MainFrame2.java`, and execute the file.

```
