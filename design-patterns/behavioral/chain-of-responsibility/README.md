# Chain of Responsibility

This design pattern decouples the sender and reciever of a request based on the type of request. A chain of objects is usually implemented.


## Participants
- Handler - an interface that process requests received and/or passes on this request down the chain. It only has reference to one handler on the chain.
- ConcreteHandler - these are the actual handlers that implements the `Handler` interface. They process requests or perfrom tasks in a sequential order
- Client - this is the originator of the request. It has access to the root handler and passes requests down the chain through it.

```js
function Logger() {}
Logger.prototype.log = function (msg) {
  if (msg.level > this.level) {
    if (this.nextLogger) {
      return this.nextLogger.log(msg);
    }
    return 'No logger can handle this message';
  }
  return `${this.constructor.name.toUpperCase()}: ${msg.message}`;
};

function ConsoleLogger() {
  this.level = 1;
}
function ErrorLogger() {
  this.level = 11;
}
function WarningLogger() {
  this.level = 21;
}
ConsoleLogger.prototype = new Logger();
ConsoleLogger.prototype.constructor = ConsoleLogger;
ErrorLogger.prototype = new Logger();
ErrorLogger.prototype.constructor = ErrorLogger;
WarningLogger.prototype = new Logger();
WarningLogger.prototype.constructor = WarningLogger;

function LoggerApp(logger = null) {
  this.logger = logger;
}
LoggerApp.prototype.logMessage = function (msg) {
  if (this.logger) {
    return this.logger.log(msg);
  }
};
LoggerApp.prototype.addLogger = function (logger) {
  this.logger.nextLogger = logger;
};

const myLoggerApp = new LoggerApp(new ConsoleLogger());
myLoggerApp.addLogger(new ErrorLogger());
myLoggerApp.addLogger(new WarningLogger());
myLoggerApp.logMessage({level: 12, message: 'Something critical is presently occurring'});
```