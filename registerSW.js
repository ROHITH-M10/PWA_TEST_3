if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/PWA_TEST_3/sw.js', { scope: '/PWA_TEST_3/' })})}