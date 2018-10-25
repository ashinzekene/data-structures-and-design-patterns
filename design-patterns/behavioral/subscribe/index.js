const delay = (t = 2000) => new Promise(resolve => {
  setTimeout(() => resolve(), t);
});

const PublishSubscribe = (() => {
  const topics = {};
  const generateToken = () => `sub-${parseInt(Math.random() * 100000, 10)}`
    .padEnd(12, '0');
  return {
    subscribe(topic, func) {
      const token = generateToken();
      if (!topics[topic]) {
        topics[topic] = [];
      }
      topics[topic].push({token, func});
      return token;
    },
    publish(topic, data) {
      if (!topics[topic]) {
        return Boolean(console.log(`Topic: ${topic} does not exist`));
      }
      topics[topic].forEach(subscriber => {
        subscriber.func(topic, data);
      });
    },
    unsubscribe(token) {
      Object.keys(topics).forEach(topic => {
        topics[topic] = topics[topic].filter(topic => topic.token !== token);
      });
    }
  };
})();

const sub1 = PublishSubscribe.subscribe('mail/inbox', (topic, data) => {
  console.log('Subscriber 1 received new message', topic, data);
});

PublishSubscribe.subscribe('mail/inbox', (topic, data) => {
  console.log('Subscriber 2 received new message', topic, data);
});
PublishSubscribe.subscribe('mail/update', (topic, data) => {
  console.log('Subscriber 3 received new message', topic, data);
});

const run = async () => {
  PublishSubscribe.publish('mail/inbox', {
    from: 'Mr Ekene',
    msg: `Hello Sir,
     Please, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores iusto
     perspiciatis fugiat ad laborum ab veritatis tenetur temporibus. Iure, commodi error
     nihil rerum ducimus nulla iste doloribus libero unde.
    `
  });

  PublishSubscribe.unsubscribe(sub1);
  await delay(2000);

  PublishSubscribe.publish('mail/inbox', {
    from: 'Mr Ekene',
    msg: `Hello Sir,
     Please, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores iusto
     perspiciatis fugiat ad laborum ab veritatis tenetur temporibus. Iure, commodi error
     nihil rerum ducimus nulla iste doloribus libero unde.
    `
  });

  await delay(2000);

  PublishSubscribe.publish('mail/spam', {
    from: 'Mr Ekene',
    msg: `Hello Sir,
    Spam message`
  });

  await delay(2000);

  PublishSubscribe.publish('mail/update', {
    from: 'Mr Kent',
    msg: `Hello Sir,
    This follows an update on the initial pending request...`
  });
};

run();
