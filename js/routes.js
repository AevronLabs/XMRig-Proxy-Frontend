const routes = [
  // Index page
  {
    path: '/',
    async(routeTo, routeFrom, resolve, reject) {
      if (window.appState && window.appState.password) {
        resolve({ url: './pages/main.html' })
      } else {
        resolve({ url: './pages/login.html' })
      }
    }
  },    
  // Main page
  {
    path: '/main/',
    url: './pages/main.html',
    name: 'main',
  },    
  // Workers page
  {
    path: '/workers/',
    url: './pages/workers.html',
    name: 'workers',
  },  
  // Settings page
  {
    path: '/settings/',
    url: './pages/settings.html',
    name: 'settings',
  },
  // Change Pool page
  {
    path: '/ch_pool/',
    url: './pages/ch_pool.html',
    name: 'ch_pool',
  },   
  // History page
  {
    path: '/history/',
    url: './pages/history.html',
    name: 'history',
  }, 
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
