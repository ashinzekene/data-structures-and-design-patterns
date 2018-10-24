# Subscriber Pattern

Here a topic sits in between the object receiving the event (subscriber) and the the object sending the event (Publisher). Unlike the observer pattern where all observers registered receive the event,in this pattern subscribers receive only the events they are subscribed to.

```js

const subscriber1 = subscribe('inbox/new-notification', notification => {
  console.log('Subscriber 1: New Notification', notification)
})

const subscriber2 = subscribe('inbox/new-notification', notification => {
  console.log('Subscriber 2: New Notification', notification)
})

const subscriber3 = subscribe('inbox/new-message', msg => {
  console.log('Subscriber 3: New Message', msg)
})

publish('inbox/new-message', {
  from: 'person@mail.com',
  message: 'Thanks for the subscription',
  date: 'some-day'
})

publish('inbox/new-notification', {
  from: 'anotherperson@mail.com',
  message: 'This is a new notification',
  date: 'some-day'
})
```