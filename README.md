# 简介
npm（Node Package Manager） 是 Node.js 标准的软件包管理器。

2020年3月17日，Github宣布收购npm，GitHub现在已经保证npm将永远免费。

## 安装依赖
使用 npm 可以管理项目依赖的下载。

如果项目有package.json文件，则使用 `npm install` 命令可以安装所有项目依赖，默认安装在 `node_modules` 文件夹下（如果没有会创建）

使用 `npm install <package-name>` 命令可以安装指定项目依赖。
- 如果添加 `--save` 标志，会安装并添加条目到 package.json 文件的 dependencies，即安装为生产依赖。
- 如果添加 `--save-dev` 标志，会安装并添加条目到 package.json 文件的 devDependencies，即安装为开发依赖。

生产依赖是应用在生产环境中运行时需要用到的依赖，开发依赖通常为开发时所需要的工具。

## 运行任务
使用 `npm run <task-name>` 可以快捷运行package.json文件中script配置项下的命令行任务，以避免运行冗长的命令。