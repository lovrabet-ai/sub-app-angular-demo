// 微前端配置文件
module.exports = {
  // 应用名称
  name: 'angular-time-app',
  
  // 入口文件
  entry: './dist/angular-time-app/main.js',
  
  // 挂载模式
  mode: 'import', // 使用 ES modules 方式加载
  
  // 应用信息
  appInfo: {
    name: 'Angular 时间应用',
    description: '一个简单的 Angular 时间显示应用',
    version: '1.0.0'
  },
  
  // 支持的生命周期
  lifecycle: {
    mount: true,
    unmount: true,
    update: true
  },
  
  // 资源配置
  assets: {
    js: ['./dist/angular-time-app/main.js'],
    css: ['./dist/angular-time-app/styles.css']
  }
};