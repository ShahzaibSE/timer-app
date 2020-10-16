let cache_name = "timer_cache"
let urlsToCache = [
    '/',
    'index.html',
    '/logo192.png',
    '/logo512.png',
    '/favicon.ico',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/1.chunk.js',
    'time-background.jpg',
    '/static/media/start-button-background.c9302504.jpg',
    '/static/media/stop-time-background.9934fa3c.jpg',
    '/static/media/reset-button-background.3dac8a28.jpg'
  ];

console.log("Service Worker started: ",cache_name)

this.addEventListener('install',(event)=>{
  event.waitUntil(
    caches.open(cache_name).then((cache)=>{
      cache.addAll(urlsToCache)
    }).catch(err => {
      console.log("Unable to cache file")
    })
  )
})

this.addEventListener('fetch',(event)=>{
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
})