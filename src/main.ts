import { ApplicationRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import setLibraryName from '@ice/stark-app/lib/setLibraryName';
// 确保 Zone.js 被加载
import 'zone.js';

import { App } from './app/app';

// 设置微应用名称
setLibraryName('angular-time-app');

let app: ApplicationRef | null = null;

// 独立运行时自动启动
if (!isInIcestark()) {
  bootstrapApplication(App, { providers: [] })
    .then(appRef => {
      app = appRef;
    })
    .catch(err => console.error(err));
}

// 微前端生命周期
export async function mount(props?: any) {

  // 获取容器
  const container = props?.container || document.body;

  // 创建 app-root 元素
  // 因为angular的一定要有一个根元素，所以这里需要创建一个app-root元素，这里是在app.ts里selector配置里定义的
  const appRoot = document.createElement('app-root');
  container.appendChild(appRoot);

  console.log('已创建 app-root 元素并添加到容器');

  app = await bootstrapApplication(App, {
    providers: []
  });
}

export function unmount() {
  if (app) {
    app.destroy();
    app = null;
  }

  // 清理 app-root 元素
  const appRoot = document.querySelector('app-root');
  if (appRoot && appRoot.parentNode) {
    appRoot.parentNode.removeChild(appRoot);
  }

  console.log('已清理 app-root 元素');
}
