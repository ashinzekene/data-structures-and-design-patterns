# Facade

This pattern provides an external API for performing concealed complex logic within the class or function.
It provides a convinient higher level interface to a larger body of code residing underneath.

It also occurrs when an impelmentation has different methods with different levels of support but a higher level API abstract these methods


```js
function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
```