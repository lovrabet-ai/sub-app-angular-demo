# AngularTimeApp

此项目使用 [Angular CLI](https://github.com/angular/angular-cli) 版本 20.2.0 生成。
用于 Lovrabet 微前端嵌入 Angular 演示使用

效果如图
![](https://i.yuntooai.com/u/AZjgrXeQcACF-eC7KDNCfA.png)

## 开发

要启动本地开发服务器，请运行：

```bash
npm run start
```

服务器运行后，打开浏览器并导航到 `http://localhost:4200/`。当您修改任何源文件时，应用程序将自动重新加载。

## 构建

要构建项目，请运行：

```bash
npm run build
```

## 跟 Lovrabet 应用合并部署

构建后的产物在 `./dist/angular-time-app/browser` 目录，可自行将构建产物发布到 CDN、应用服务器等任何有 URL 的服务环境，根据[Lovrabet 应用自定义页面开发手册](https://qizhiyuntu.feishu.cn/wiki/Td9swbvM1ie3pIkHlNUcjuehnuh?fromScene=yuntooai#share-K9oMdpUXqoe4Trxtzn7cdgoNnFu)可以微前端子应用方式跟 Lovrabet 主应用合并部署。
