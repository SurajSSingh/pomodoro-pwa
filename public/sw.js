self.addEventListener('fetch', (event) => {
    self.registration.showNotification('Hello', {
      body: 'This is a test notification',
    });
  });
