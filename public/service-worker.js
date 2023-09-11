// service-worker.js
self.addEventListener('fetch', (event) => {
    // Custom logic for handling fetch events
    // ...
  
    // Example of calling showNotification()
    self.registration.showNotification('Hello', {
      body: 'This is a notification',
    });
  });
