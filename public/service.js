
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('weather').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/script.js',
          'images/sun.png',
          'images/pin.png',
          'images/cloud.png',
          'images/rain.png',
          'images/downloadss.jpg'
        ]);
      })
    );
   });

   self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
   