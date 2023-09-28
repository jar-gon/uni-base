const fs = require('fs');
const path = require('path');

const pagesConfig = require('../pages.config.js');

const defaultConfig = {
  index: 'index', // 首页配置，对应pages的首页目录名
  pages: 'pages', // 主包文件名
  configDir: 'pages_config', // 配置文件目录
  pagesStyleName: 'style.js',
  subPackages: [], // 子包的目录名
  ...pagesConfig,
};

let pagesJson = {};

const mainPath = __dirname.replace(/\\bin/g, '') || process.cwd();

function getPagesFun(dirName, isSub) {
  const pagesPath = path.join(mainPath, dirName);
  const pagesDirs = fs.readdirSync(pagesPath);
  const pages = [];
  const preDir = isSub ? '' : `${dirName}/`;
  for (const directoryName of pagesDirs) {
    const directoryPath = path.join(pagesPath, directoryName);
    if (fs.statSync(directoryPath).isDirectory()) {
      const pageConfig = {};
      pageConfig.path = `${preDir}${directoryName}/${directoryName}`;
      const mainFiles = fs.readdirSync(directoryPath);
      for (const fileName of mainFiles) {
        if (fileName === defaultConfig.pagesStyleName) {
          pageConfig.style = require(path.join(directoryPath, fileName));
        }
      }
      if (directoryName === defaultConfig.index && !isSub) {
        pages.unshift(pageConfig);
      } else {
        pages.push(pageConfig);
      }
    }
  }
  return pages;
}

// 读取主包配置
pagesJson.pages = getPagesFun(defaultConfig.pages, false);

// 读取子包配置
pagesJson.subPackages = [];
if (defaultConfig.subPackages.length > 0) {
  defaultConfig.subPackages.forEach(subName => {
    const subPageConfig = {};
    subPageConfig.root = subName;
    subPageConfig.pages = getPagesFun(subName, true);
    pagesJson.subPackages.push(subPageConfig);
  });
}

// 读取其它配置
const configPath = path.join(mainPath, defaultConfig.configDir);
const configDirs = fs.readdirSync(configPath);
for (const fileName of configDirs) {
  const key = fileName.replace('.js', '');
  pagesJson[key] = require(path.join(configPath, fileName));
}

const pagesaPath = path.join(mainPath, '/pages.json');

fs.writeFileSync(pagesaPath, JSON.stringify(pagesJson));
