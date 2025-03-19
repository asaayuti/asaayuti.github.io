'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"assets/AssetManifest.json": "2df040b9bffd4d93186be54c46b17376",
"assets/AssetManifest.bin.json": "bf5f02abe7ad1641cc5dc08cdfce61c6",
"assets/assets/icons/tik-tok.png": "e30e4714ecadc84324ee6e65ae93d669",
"assets/assets/icons/twitter.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/assets/icons/service-icon2.png": "233237a0ea968e3515ef77663f78be36",
"assets/assets/icons/service-icon3.png": "16b55727c209fc8ff9da0df5731f1c11",
"assets/assets/icons/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/icons/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/icons/service-icon5.png": "d2a756ff6ae67476d6d102fa82ef1a3c",
"assets/assets/icons/globe.png": "cd69dac8f7824c22c16bddf9cbc83ba8",
"assets/assets/icons/service-icon4.png": "2f29e0088963f8ae125b6d2622d74c0f",
"assets/assets/icons/service-icon1.png": "2eaf1a87ec016307ba42e0bc65101f8b",
"assets/assets/icons/linkedin.png": "efdb74ff3631151062095b0c9b228c21",
"assets/assets/icons/youtube.png": "642bfb077a5c99b6564f979578900c53",
"assets/assets/imgs/p3.png": "27b69c56f4f32036a6ea5014eb4790ee",
"assets/assets/imgs/portfolio-img5.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/p4.png": "adc921888d28b24cfd623096c8eff781",
"assets/assets/imgs/p2.png": "8344f0a554aeefb1a8abcb614c45c9b6",
"assets/assets/imgs/vector.png": "16fa78ca01ce794aa977d10a284d4751",
"assets/assets/imgs/portfolio-img1.png": "7b671598ea608ec41d52c9f57f7d94ab",
"assets/assets/imgs/p1.png": "e8f94ef8485a3ce04b82bc11b3b3dfeb",
"assets/assets/imgs/portfolio-img4.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/portfolio-img3.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/portfolio-img2.png": "73ffe243d72ec55b1c7dbc33c4c3c020",
"assets/assets/imgs/p5.png": "f3e18b5b7cc26059cfb54186d465d018",
"assets/assets/fonts/josefinsans/JosefinSans-Light.ttf": "1e660e971a00bdedd9aea889b8b3308d",
"assets/assets/fonts/josefinsans/JosefinSans-Regular.ttf": "effd9508e574fd2ab338bbd81f784f3e",
"assets/assets/fonts/josefinsans/JosefinSans-Italic.ttf": "72c897aabeba0a923c4eca1b355fb866",
"assets/assets/fonts/josefinsans/JosefinSans-Bold.ttf": "b22a8f2494bafa9cd040aa9db29bc43d",
"assets/assets/fonts/josefinsans/JosefinSans-Medium.ttf": "4c0529618e047e91b356eb04633136dc",
"assets/assets/fonts/josefinsans/JosefinSans-SemiBold.ttf": "4d6fba7324c7c30b35e1190e93f38aac",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/fonts/MaterialIcons-Regular.otf": "3b9b117d36d50ab98251fcb4407413c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/NOTICES": "0c052fdbd338be159bb10b034a861ef5",
"assets/AssetManifest.bin": "9959f4854c313b52768c28ebd97414c5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "d5a6c1b6c7d631a2efa7f4a0a93592d5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"flutter_bootstrap.js": "23f4a9c7ce11ea69231d1b74541c61e7",
"index.html": "2924434e61977cb9064dcbf09300a329",
"/": "2924434e61977cb9064dcbf09300a329",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "f7b55ffd885a3ded441e18610315ee82",
"main.dart.js": "c51c351306a7d280909e4d7e7b8e8647",
"manifest.json": "07a1715db65a656065f90bdae32f2ea1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
