# Design Patterns

A reusable solution that can be applied to commonly reoccureing problems in software design. They can also been seem as templates used in solving problems.

## Types of Design patterns

### Creational Design Patterns
This is concerned with the way objects are created. Helps in creating object based on the way they are to be worked with.
Examples: Constructor, Factory, Abstract, Prototype, Builder, Singleton

### Structural Design Patterns
This is concerned with object composition, relationships between objects

Examples: Decorator, Farcade, Flyweight, Adapter, Proxy

### Behavioral Design Patterns
This helps in streamlinig the communication between different objects in a system

Examples: Observer, Mediator, Iterator, Visitor


### Creational- Based on the concept of creating an object.
| Type        | Description
|--------------|-----------------------------------------
| **Class**
| Factory Method	| This makes an instance of several derived classes based on interfaced data or events.
| **Object**
| Abstract Factory  | Creates an instance of several families of classes without concrete classes.
| Builder | Separates object construction from its representation, always creates the same of object.
| Prototype | A fully initialized instance used for copying or cloning.
| Singleton | A class with only a single instance with global access point

### Structural  -   Based on the idea of building blocks of objects.
| Type        | Description
|-------------|-----------------------------------------
| **Class**
| Adapter | Match interfaces of different classes therefore classes can work together incompatible interfaces.
| **Object**
| Adapter | Match interfaces of different classes therefore classes can work together incompatible interfaces.
| Bridge  | Separates an object's interface from its implementation so the two can independently.
| Composite | A structure of simple and composite objects which makes the total object than just the sum of its parts.
| Decorator | Dynamically add alternate processing to objects.
| Facade  | A single class that hides the complexity of an entire subsystem.
| Flyweight | A fine-grained instance used for efficient sharing of information that contained elsewhere.
| Proxy | A place holder object representing the true object.

### Behavioral  -  Based on the way objects play and work together.
| Type        | Description
|--------------|-----------------------------------------
| **Class**
| Interpreter | A way to include language elements in an application to match the grammar of the intended language.
| Template Method | Creates the shell of an algorithm in a method, then defer the exact steps to a subclass.
| **Object**
| Chain of Responsibility  | A way of passing a request between a chain of objects to find the object that can handle the request.
| Command | Encapsulate a command request as an object to enable, logging and/or queuing of requests, and provides error - handling for unhandled requests.
| Iterator  | Sequentially access the elements of a collection without knowing the inner workings of the collection.
| Mediator  | Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other.
| Memento | Capture an object's internal state to be able to restore it later.
| Observer  | A way of notifying change to a number of classes to ensure consistency between the classes.
| State | Alter an object's behavior when its state changes.
| Strategy  | Encapsulates an algorithm inside a class separating the selection from the implementation.
| Visitor | Adds a new operation to a class without changing the class.

## Resources
- [Learning JavaScript Design Patterns - Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)  
- [Pro JavaScript Design Patterns - Diaz, Dustin, Harmes, Ross](https://www.amazon.com/Pro-JavaScript-Design-Patterns-Object-Oriented/dp/159059908X)