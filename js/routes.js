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
