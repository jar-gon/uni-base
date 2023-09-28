const { execSync } = require('child_process');
const path = require('path');

const generatePages = () => {
  const generatePath = path.join(__dirname, './generate.js');
  execSync(`node ${generatePath}`);
};

module.exports = () => ({
  name: 'vite-plugin-generate-pages',
  buildStart() {
    generatePages();
  },
});
