# AngularTimeApp

此项目使用 [Angular CLI](https://github.com/angular/angular-cli) 版本 20.2.0 生成。
用于 Lovrabet 微前端嵌入 Angular 演示使用

效果如图
![](https://i.yuntooai.com/u/AZjgrXeQcACF-eC7KDNCfA.png)

## 开发服务器

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

### Step 1. 发布构建后的资源文件

构建后的产物在 `./dist/angular-time-app/browser` 目录，可自行将构建产物发布到 CDN、应用服务器等任何有 URL 的服务环境
例如

```
dist/angular-time-app/browser
├── main-5VKWAEXF.js
├── polyfills-5CFQRCPP.js
└── styles-5INURTSO.css
```

web 服务器或 CDN 服务器前缀为：https://a.mycdn.com/
发布后地址

```
https://a.mycdn.com/main-5VKWAEXF.js
https://a.mycdn.com/polyfills-5CFQRCPP.js
https://a.mycdn.com/styles-5INURTSO.css
```

### Step 2. 在 Lovrabet 新建源码页面填写资源地址

将发布后可访问的 URL 链接，根据[Lovrabet 应用自定义页面开发手册](https://qizhiyuntu.feishu.cn/wiki/Td9swbvM1ie3pIkHlNUcjuehnuh?fromScene=yuntooai#share-K9oMdpUXqoe4Trxtzn7cdgoNnFu)指引，复制到「资源加载列表」中：
![](https://i.yuntooai.com/u/AZjgvT7hcACy1TxxB6QwVQ.png)
