### 基础框架

> packages/components 公共组件包  
> packages/site 简易项目  
> packages/site-pro 完整项目  
> packages/theme 主题包 (待开发)

### 开始

> npm run bootstrap | pnpm install  
> npm run serve:site  
> npm run build:site  
> \*packages 里并不需要单独 install，在最外层启动项目

### 待办事项

- 架构
  - 分离相同配置至外层
    - vite 配置和功能
    - env 配置
    - ts type
    - postcss 配置
    - mock server 配置和服务
    - test server 配置和服务
    - prettier 配置
    - stylelint 配置
    - windi 配置
  - 构建 cli 脚手架
  - 构建轻应用框架
  - 开发通用 theme 主题库
  - 开发通用函数库
- 丰富 components 公共组件，引入通用主题
  - 基础组件
    - 按钮 Button
    - 下拉框 Select
    - 多选单选框 Checkbox
    - 输入框 Input
    - 开关 Switch
    - 图片 Image
    - 全局提示 Message
    - 对话框 Modal
    - 页头 PageHeader
  - 组合组件
    - 上传 Upload
    - 导航菜单 Menu
    - 分页 Pagination
    - 表格 Table
    - 多功能搜索区
    - 表单 Form
- 低代码平台
  - 模块搭建
    - 拖拽功能
    - 物料库搭建 (components 与 函数库)
    - 构建 types 生成器
  - node 搭建

### 项目流程

1. 分离配置，packages 内部应用只配置少量个性化配置，甚至零配置
2. 重构 theme 模块，提取公共样式，内部应用通过读取该模块配置进行动态渲染主题
3. 丰富 components 模块
4. 构建 cli 模块
