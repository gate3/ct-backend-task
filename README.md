# CT Backend

CT Backend is a task to build an api to manage orders. The app currently contains functionality to create and update orders.

# Task Management
I made use of a Trello board to manage and breakdown the tasks, please find that here

<a href="https://trello.com/c/eemdlrbq/30-api-routes-setup-put-route-for-handling-order-modification">https://trello.com/c/eemdlrbq/30-api-routes-setup-put-route-for-handling-order-modification</a>

# File Structure
![file structure](https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2019/10/folder-structure.png?w=730&ssl=1)
<a href="https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/">Source LogRocket</a>

# Architecture
![Architecture](https://github.com/gate3/ct-backend-task/blob/staging/backend%20arch.png)
## Explanation

The diagram above shows a rudimentary architecture to the backend application. My focus was majorly on making sure the app is extensible, DRY and ensuring components or tools can be swapped out without having to make large changes to the codebase.
Here is an explanation to some important parts of the architecture.

1. Services - This contains the core business logic of the functionalities implemented in the backend. In this case we have just the order service, but in an ideal situation we could have other functionalities or resources that the api needs to manage. 
The duty of the service is to perform the core business logic on the data provided by the user. In this case, it takes order information for both create and update orders, validates them according to business rules and passes them on to the repository, then takes the response from the repository and returns it back to the route.

2. Repository - The repository functions follows the repository pattern, by encapsulating logic to access the data source. It can help put all related data access logic in one place and helps decouple the infrastructure from the domain/service layer. More can be read here about it
<a href="https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design">Design the infrastructure persistence layer</a>

3. Database Helper - This class contains functions that abstracts away firebase specific code and exposes them using common function names which can also be implemented when switching to a new database. This pattern helps ensure that the amount of code that needs to be modified if/when there needs to be a change to the database being used is very minimal. 
The pattern also follows the coding practice of not coding to implementations and coding to interfaces. When using a static typed language like typescript, this class would have inherited from an interface.


# Libraries Used

- Awilix - For dependency injection
- Jest - For running unit tests
- Dotenv - For using environment variables in development
- Joi - For validating data
- Joi Phone Number - For validating any phone number type
- Firebase Admin - For performing database operations on firebase
- Http Status Codes - For a complete set of status codes


# Todo

I had a lot of fun building this but there are some improvements I can still make:

- More tests, especially integration tests, unit tests for the services and api tests using super test. Also write more tests to test edge and bad cases
- Expose the DatabaseHelper using a database factory (factory pattern), this will help easily swap out implementations
- Use a DTO object to handle transfer of data from the api routes to the service layer, this will help keep data consistent even data names change
- Plan features and do periodic and systematic release of codes using versioning (git tags)

# Build Instructions

- Clone the repository using ```git clone https://github.com/gate3/ct-backend-task```
- Run ```npm i``` or ```npm install``` to install all app dependencies
- I included a Makefile to help simplify running the app even further, to run in development mode you can use ```make debug``` while to run without development mode ```make start```. If you don't have make (You really should, it's awesome), you can run ```DEBUG=*:* npm start``` to run in development mode or ```npm start``` to run normally.

# Tests

To run the tests, simply type ```npm test```

Thank you 👍
