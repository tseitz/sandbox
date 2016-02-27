'use strict';

/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function () {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features

  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

  if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js').then(function (registration) {
      // Check to see if there's an updated version of service-worker.js with
      // new files to cache:
      // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-registration-update-method
      if (typeof registration.update === 'function') {
        registration.update();
      }

      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function () {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function () {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' + 'service worker became redundant.');

              default:
              // Ignore
            }
          };
        }
      };
    }).catch(function (e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here
  console.log('Hello, Lucas!');
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLENBQUMsWUFBVztBQUNWOzs7Ozs7QUFEVTtBQU9WLE1BQUksY0FBYyxRQUFRLE9BQU8sUUFBUCxDQUFnQixRQUFoQixLQUE2QixXQUE3Qjs7QUFFdEIsU0FBTyxRQUFQLENBQWdCLFFBQWhCLEtBQTZCLE9BQTdCOztBQUVBLFNBQU8sUUFBUCxDQUFnQixRQUFoQixDQUF5QixLQUF6QixDQUNFLHdEQURGLENBSnNCLENBQXRCLENBUE07O0FBZ0JWLE1BQUksbUJBQW1CLFNBQW5CLEtBQ0MsT0FBTyxRQUFQLENBQWdCLFFBQWhCLEtBQTZCLFFBQTdCLElBQXlDLFdBQXpDLENBREQsRUFDd0Q7QUFDMUQsY0FBVSxhQUFWLENBQXdCLFFBQXhCLENBQWlDLG1CQUFqQyxFQUNDLElBREQsQ0FDTSxVQUFTLFlBQVQsRUFBdUI7Ozs7QUFJM0IsVUFBSSxPQUFPLGFBQWEsTUFBYixLQUF3QixVQUEvQixFQUEyQztBQUM3QyxxQkFBYSxNQUFiLEdBRDZDO09BQS9DOzs7QUFKMkIsa0JBUzNCLENBQWEsYUFBYixHQUE2QixZQUFXOzs7OztBQUt0QyxZQUFJLFVBQVUsYUFBVixDQUF3QixVQUF4QixFQUFvQzs7O0FBR3RDLGNBQUksbUJBQW1CLGFBQWEsVUFBYixDQUhlOztBQUt0QywyQkFBaUIsYUFBakIsR0FBaUMsWUFBVztBQUMxQyxvQkFBUSxpQkFBaUIsS0FBakI7QUFDTixtQkFBSyxXQUFMOzs7OztBQUtFLHNCQUxGOztBQURGLG1CQVFPLFdBQUw7QUFDRSxzQkFBTSxJQUFJLEtBQUosQ0FBVSxvQkFDQSxrQ0FEQSxDQUFoQixDQURGOztBQVJGOzthQUQwQztXQUFYLENBTEs7U0FBeEM7T0FMMkIsQ0FURjtLQUF2QixDQUROLENBdUNHLEtBdkNILENBdUNTLFVBQVMsQ0FBVCxFQUFZO0FBQ25CLGNBQVEsS0FBUixDQUFjLDJDQUFkLEVBQTJELENBQTNELEVBRG1CO0tBQVosQ0F2Q1QsQ0FEMEQ7R0FENUQ7OztBQWhCVSxTQStEVixDQUFRLEdBQVIsQ0FBWSxlQUFaLEVBL0RVO0NBQVgsQ0FBRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKlxuICogIFdlYiBTdGFydGVyIEtpdFxuICogIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQ2hlY2sgdG8gbWFrZSBzdXJlIHNlcnZpY2Ugd29ya2VycyBhcmUgc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGJyb3dzZXIsXG4gIC8vIGFuZCB0aGF0IHRoZSBjdXJyZW50IHBhZ2UgaXMgYWNjZXNzZWQgZnJvbSBhIHNlY3VyZSBvcmlnaW4uIFVzaW5nIGFcbiAgLy8gc2VydmljZSB3b3JrZXIgZnJvbSBhbiBpbnNlY3VyZSBvcmlnaW4gd2lsbCB0cmlnZ2VyIEpTIGNvbnNvbGUgZXJyb3JzLiBTZWVcbiAgLy8gaHR0cDovL3d3dy5jaHJvbWl1bS5vcmcvSG9tZS9jaHJvbWl1bS1zZWN1cml0eS9wcmVmZXItc2VjdXJlLW9yaWdpbnMtZm9yLXBvd2VyZnVsLW5ldy1mZWF0dXJlc1xuICB2YXIgaXNMb2NhbGhvc3QgPSBCb29sZWFuKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcbiAgICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnWzo6MV0nIHx8XG4gICAgICAvLyAxMjcuMC4wLjEvOCBpcyBjb25zaWRlcmVkIGxvY2FsaG9zdCBmb3IgSVB2NC5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5tYXRjaChcbiAgICAgICAgL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvXG4gICAgICApXG4gICAgKTtcblxuICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciAmJlxuICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgfHwgaXNMb2NhbGhvc3QpKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGVyZSdzIGFuIHVwZGF0ZWQgdmVyc2lvbiBvZiBzZXJ2aWNlLXdvcmtlci5qcyB3aXRoXG4gICAgICAvLyBuZXcgZmlsZXMgdG8gY2FjaGU6XG4gICAgICAvLyBodHRwczovL3NsaWdodGx5b2ZmLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyL3NwZWMvc2VydmljZV93b3JrZXIvaW5kZXguaHRtbCNzZXJ2aWNlLXdvcmtlci1yZWdpc3RyYXRpb24tdXBkYXRlLW1ldGhvZFxuICAgICAgaWYgKHR5cGVvZiByZWdpc3RyYXRpb24udXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlZ2lzdHJhdGlvbi51cGRhdGUoKTtcbiAgICAgIH1cblxuICAgICAgLy8gdXBkYXRlZm91bmQgaXMgZmlyZWQgaWYgc2VydmljZS13b3JrZXIuanMgY2hhbmdlcy5cbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHVwZGF0ZWZvdW5kIGlzIGFsc28gZmlyZWQgdGhlIHZlcnkgZmlyc3QgdGltZSB0aGUgU1cgaXMgaW5zdGFsbGVkLFxuICAgICAgICAvLyBhbmQgdGhlcmUncyBubyBuZWVkIHRvIHByb21wdCBmb3IgYSByZWxvYWQgYXQgdGhhdCBwb2ludC5cbiAgICAgICAgLy8gU28gY2hlY2sgaGVyZSB0byBzZWUgaWYgdGhlIHBhZ2UgaXMgYWxyZWFkeSBjb250cm9sbGVkLFxuICAgICAgICAvLyBpLmUuIHdoZXRoZXIgdGhlcmUncyBhbiBleGlzdGluZyBzZXJ2aWNlIHdvcmtlci5cbiAgICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAvLyBUaGUgdXBkYXRlZm91bmQgZXZlbnQgaW1wbGllcyB0aGF0IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nIGlzIHNldDpcbiAgICAgICAgICAvLyBodHRwczovL3NsaWdodGx5b2ZmLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyL3NwZWMvc2VydmljZV93b3JrZXIvaW5kZXguaHRtbCNzZXJ2aWNlLXdvcmtlci1jb250YWluZXItdXBkYXRlZm91bmQtZXZlbnRcbiAgICAgICAgICB2YXIgaW5zdGFsbGluZ1dvcmtlciA9IHJlZ2lzdHJhdGlvbi5pbnN0YWxsaW5nO1xuXG4gICAgICAgICAgaW5zdGFsbGluZ1dvcmtlci5vbnN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGluc3RhbGxpbmdXb3JrZXIuc3RhdGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnaW5zdGFsbGVkJzpcbiAgICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgb2xkIGNvbnRlbnQgd2lsbCBoYXZlIGJlZW4gcHVyZ2VkIGFuZCB0aGVcbiAgICAgICAgICAgICAgICAvLyBmcmVzaCBjb250ZW50IHdpbGwgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBjYWNoZS5cbiAgICAgICAgICAgICAgICAvLyBJdCdzIHRoZSBwZXJmZWN0IHRpbWUgdG8gZGlzcGxheSBhIFwiTmV3IGNvbnRlbnQgaXNcbiAgICAgICAgICAgICAgICAvLyBhdmFpbGFibGU7IHBsZWFzZSByZWZyZXNoLlwiIG1lc3NhZ2UgaW4gdGhlIHBhZ2UncyBpbnRlcmZhY2UuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAncmVkdW5kYW50JzpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbnN0YWxsaW5nICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VydmljZSB3b3JrZXIgYmVjYW1lIHJlZHVuZGFudC4nKTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZSkge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFlvdXIgY3VzdG9tIEphdmFTY3JpcHQgZ29lcyBoZXJlXG4gIGNvbnNvbGUubG9nKCdIZWxsbywgTHVjYXMhJyk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
