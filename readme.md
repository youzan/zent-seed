# Zent - Seed

Zent仓库的手脚架，新组件必须依照该仓库的文件组织方式来组织自己的代码。

## 目录说明

```
- assets/           # 存放样式、图片等文件
- examples/         # demo目录
- lib/              # 打包生成后的文件目录
- src/              # 组件源文件
- .editorconfig     # 规定各类型文件的缩进等规则
- .eslintrc         # lint config
- package.json      
- readme.md
```

## 初始化项目依赖

```bash
npm --registry=http://registry.npm.qima-inc.com install
```

## 安装编辑器插件
给你的编辑器安装上 `editorconfig` 和 `eslint` 的插件

## 命令说明

```bash
# 检查代码格式
npm run lint

# 开启开放辅助工具，开启后可以通过浏览器快速查看`examples`里面的`demo
npm run dev

# 打包
npm run pre-publish

# 发布
npm --registry=http://registry.npm.qima-inc.com publish
```
