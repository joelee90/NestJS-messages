npm run start:dev

nest generate module messages

nest generate controller messages/messages --flat

[controller] : type of class

[messages] : places the file in the messages folder

[messages] : calls the class 'messages'

[--flat] : don't create extra folder

-Adding Routing Logic-
-Validating Request Data with Pipes-
-Adding validation rules-

-Services and Repositories-

Services :

- Place to put any business logic.
- Uses one or more repositories to find or store data.

Repositores :

- Place to put storage-related logic.
- Ends up being TypeORM entity, Mongoose schema or similar.

-Reporting Errors with Exceptions-

-Dependency Injection-
Why Exist? :

Inversion of Control Principle : Classes should not create instances of its dependencies on its own.

Useful when needed testing.

Nest Dependency Injection Container/Injector

Flow:

At startup, register all classes with the container.
Container will figure out what each dependency each class has.
We then ask the container to create an instance of a class for us.
Container creates all required dependencies and gives us the instance.
Container will hold onto the created dependency instances and reuse them if needed.
