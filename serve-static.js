const express = require('express');
const path = require('path');
const app = express();

// 启用 CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// 静态文件服务
app.use('/angular-time-app', express.static(path.join(__dirname, 'dist/angular-time-app/browser')));

// 提供资源配置信息
app.get('/angular-time-app/assets.json', (req, res) => {
  const assets = require('./microfrontend-assets.json');
  // 添加完整的 URL 路径
  const baseUrl = `${req.protocol}://${req.get('host')}/angular-time-app`;
  assets.assets.js = assets.assets.js.map(file => `${baseUrl}/${file}`);
  assets.assets.css = assets.assets.css.map(file => `${baseUrl}/${file}`);
  assets.entry = `${baseUrl}/${assets.entry}`;
  
  res.json(assets);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`微前端静态资源服务运行在: http://localhost:${PORT}`);
  console.log(`资源配置信息: http://localhost:${PORT}/angular-time-app/assets.json`);
  console.log(`主应用入口: http://localhost:${PORT}/angular-time-app/main-LQMU7WCQ.js`);
});

module.exports = app;