# ✅ T2T-YAO Portal 部署检查清单

## 📋 部署前检查

在部署到 Netlify 之前，请确认以下项目：

### 🗂️ 必需文件检查
- [x] `index.html` - 主页面文件
- [x] `styles.css` - 样式文件
- [x] `script.js` - JavaScript 功能文件
- [x] `genome-illustration.png` - 基因组插图
- [x] `netlify.toml` - Netlify 配置文件
- [x] `_redirects` - 重定向规则文件

### 🔧 配置文件检查
- [x] `package.json` - 项目依赖配置
- [x] `README.md` - 项目说明文档
- [x] `NETLIFY-DEPLOYMENT.md` - 部署指南

### 📱 网站功能检查
- [ ] 在本地浏览器中打开 `index.html` 测试
- [ ] 检查所有图片是否正常显示
- [ ] 测试导航链接是否工作
- [ ] 验证联系表单功能
- [ ] 检查响应式设计（手机、平板、电脑）

### 🌐 部署选项选择

选择以下三种部署方法之一：

#### 选项 1：拖拽部署（推荐新手）
- [ ] 访问 [netlify.com](https://netlify.com)
- [ ] 注册/登录账号
- [ ] 拖拽整个项目文件夹到部署区域

#### 选项 2：Git 仓库连接
- [ ] 创建 Git 仓库
- [ ] 上传代码到仓库
- [ ] 在 Netlify 中连接仓库
- [ ] 配置自动部署

#### 选项 3：命令行部署
- [ ] 安装 Netlify CLI: `npm install -g netlify-cli`
- [ ] 运行部署脚本: `./deploy-netlify.sh`

## 🚀 部署后检查

部署完成后，请检查：

### 🌍 基本功能
- [ ] 网站能正常访问
- [ ] 所有页面都能正常显示
- [ ] 图片和样式正确加载
- [ ] 导航功能正常

### 📱 响应式设计
- [ ] 在手机上正常显示
- [ ] 在平板上正常显示
- [ ] 在电脑上正常显示

### 🔗 链接和功能
- [ ] 下载链接正常工作
- [ ] 联系表单能正常提交
- [ ] 所有外部链接正确

### ⚡ 性能优化
- [ ] 页面加载速度快
- [ ] 图片已压缩
- [ ] CSS/JS 已压缩

## 🛠️ 故障排除

如果遇到问题：

1. **检查控制台错误**
   - 打开浏览器开发者工具
   - 查看 Console 和 Network 标签页

2. **验证文件路径**
   - 确保所有文件都在正确位置
   - 检查文件名大小写

3. **测试本地运行**
   - 在本地浏览器中打开 `index.html`
   - 确认所有功能正常工作

## 📞 获取帮助

- 📖 查看 `NETLIFY-DEPLOYMENT.md` 详细指南
- 🌐 访问 [Netlify 帮助中心](https://docs.netlify.com/)
- 💬 加入 [Netlify 社区](https://community.netlify.com/)

---

🎯 **完成所有检查项目后，你的 T2T-YAO 门户就可以完美部署了！** 