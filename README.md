# Car Comparison Web Application
* This web app utilizes the Java Spring Boot framework and the React.js JavaScript library
* Our Spring Boot application produces REST APIs which our frontend can consume
## This app is composed of three parts:
* A React.js frontend UI for displaying data in the browser and styling
* A Spring Boot backend API bridging communication between a database and the UI
* A PostgreSQL database for storing object models which can have CRUD operations performed on them
## The Frontend
React.js is a library which allows us to have reusable components of HTML markup
The state (or memory) of the app is based down from parent to child components
This app consists of a few general components:
* Dropdowns, info sections, a footer, and a header (or navbar)
In this app we pass down the specific instance of the make, model, and info to the child components which then render it
Axios is utilized to fetch our API calls
## The Backend
Spring Boot is a framework which can be used for quickly getting a Spring app up and running
In this particular instance we are utilizing three dependencies:
* Spring Data JPA - allows us to persist data to our SQL storage
* Spring Web - allows us to create RESTful APIs via the MVC (model, view, controller) pattern
* PostgreSQL Driver - a form of JDBC which connects our database to the project
Our project architecture has a few components:
* Controller - this is where our frontend and backend communicate, and where our APIs are defined
* Model - this is where the structure and fields of our object (in this case a car) are defined
* Repository - an interface that allows us to persist data as a model to our database
## The Database
* The PostgreSQL database has one table (cars) and four fields (make, model, horse power, and MSRP) as well as a unique ID for each car instance

This is a small preview of how the app looks

<br>

![alt text](https://github.com/nrfletcher/car-comparison-tool/blob/main/frontend/src/resources/example.JPG)
