const fs = require('fs');
const path = require('path');
const routes = require('../src/portal/routes') || [];

// const routes = fs.readFileSync(path.join(__dirname, '/src/portal/routes.js'));

const handleRoutes = () => {
  console.log(routes);
};

handleRoutes();