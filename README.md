# 环境搭建
>
使用CRA创建项目，并安装必要依赖，包括下列基础包

npx create-react-app bill --template typescript  

npm i @reduxjs/toolkit react-redux react-router-dom  

1. Redux状态管理 -  @reduxjs/toolkit  react-redux
2. 路由 - react-router-dom

## react版本变更

antd-mobile原因，react19->react18

npm install react@18 react-dom@18

>
额外插件引入

1. 时间处理 - dayjs
2. class类名处理 - classnames
3. 移动端组件库 - antd-mobile
4. 请求插件 - axios

## mock服务器搭建 json-server

npm i json-server
npm run dbserver

## 数据分组lodash

npm i lodash

## 结尾

服务器启动 npm run dbserver
项目启动  npm start
