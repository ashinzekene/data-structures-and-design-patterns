## Observer Pattern

Here an object (Subject) maintains a list of other objects. This Subject notifies the objects of changes.

When the observer objects no longer nees to listen for changes, it can simply be removed from the list of observers

#### Participants

- Subject - knows its observers and provides a method for observers to be attached to it
- Observer - defines an updating interface for objects that should be notified of changes in a subject
- Concrete Subject - stores the state of interest in Concrete Objects. Sends a notification to its observers when its state changes
- Concrete Observer - maintains a reference to a ConcreteSubject object. Stores state that should be consisitent with the ConcreteObject. Provides a method for updating the state, to keep it consistent with the ConcreteSubject.

#### Implementation