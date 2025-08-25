// Icestark 微前端配置
module.exports = {
  // 应用基本信息
  name: 'angular-time-app',
  activePath: '/angular-time-app',
  
  // 资源配置
  url: [
    // JS 资源（按加载顺序）
    '/angular-time-app/polyfills-OORPYLQ5.js',
    '/angular-time-app/main-VE6B2D76.js'
  ],
  
  // CSS 资源
  css: [
    '/angular-time-app/styles-5INURTSO.css'
  ],
  
  // 应用配置
  appConfig: {
    // 应用标题
    title: 'Angular 时间应用',
    
    // 容器配置
    container: true, // 使用默认容器
    
    // 缓存配置
    cached: true,
    
    // 错误边界
    errorBoundary: true
  },
  
  // 生命周期配置
  lifecycle: {
    // 应用挂载
    mount: 'mount',
    
    // 应用卸载  
    unmount: 'unmount',
    
    // 应用更新
    update: 'update'
  },
  
  // 沙箱配置
  sandbox: {
    // 样式隔离
    styleIsolation: true,
    
    // JS 沙箱
    jsSandbox: true
  }
};