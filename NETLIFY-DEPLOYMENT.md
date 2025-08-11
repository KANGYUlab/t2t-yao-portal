# 🚀 Netlify Deployment Guide for T2T-YAO Portal

## 快速部署方法（推荐新手）

### 方法1：拖拽部署（最简单）

1. **访问 Netlify**
   - 打开 [netlify.com](https://netlify.com)
   - 注册账号或登录

2. **拖拽部署**
   - 直接将整个 `t2t-yao-download-portal` 文件夹拖拽到 Netlify 的部署区域
   - 等待几秒钟，你的网站就会自动部署完成

3. **获取网址**
   - 部署完成后，Netlify 会给你一个随机的网址（如：`https://amazing-name-123456.netlify.app`）
   - 你可以在设置中自定义域名

### 方法2：Git 仓库连接（推荐团队协作）

1. **上传到 Git**
   ```bash
   cd t2t-yao-download-portal
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <你的Git仓库地址>
   git push -u origin main
   ```

2. **连接 Netlify**
   - 在 Netlify 中选择 "New site from Git"
   - 选择你的 Git 提供商（GitHub/GitLab/Bitbucket）
   - 选择仓库
   - 设置部署选项：
     - Build command: 留空
     - Publish directory: `.`（根目录）

3. **自动部署**
   - 每次推送到 Git 仓库时，Netlify 会自动重新部署

### 方法3：命令行部署（推荐开发者）

1. **安装 Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **运行部署脚本**
   ```bash
   cd t2t-yao-download-portal
   ./deploy-netlify.sh
   ```

3. **手动部署命令**
   ```bash
   netlify login
   netlify init
   netlify deploy --prod
   ```

## 部署后配置

### 自定义域名
1. 在 Netlify 控制台中找到你的网站
2. 点击 "Domain settings"
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录

### 环境变量（如果需要）
- 在 Netlify 控制台的 "Environment variables" 部分添加
- 通常这个静态网站不需要环境变量

### 表单处理
- 你的联系表单会自动工作
- Netlify 会处理表单提交并发送到你的邮箱
- 可以在 "Forms" 部分查看提交记录

## 故障排除

### 常见问题

1. **页面显示 404**
   - 检查 `_redirects` 文件是否存在
   - 确保 `netlify.toml` 配置正确

2. **样式或图片不显示**
   - 检查文件路径是否正确
   - 确保所有资源文件都已上传

3. **部署失败**
   - 检查控制台错误信息
   - 确保所有必需文件都存在

### 联系支持
- Netlify 支持：support@netlify.com
- 社区论坛：community.netlify.com

## 更新网站

### 自动更新（Git 连接）
- 推送代码到 Git 仓库即可

### 手动更新
- 修改文件后重新拖拽到 Netlify
- 或使用 `netlify deploy --prod` 命令

## 性能优化

Netlify 自动提供：
- ✅ CDN 加速
- ✅ HTTPS 证书
- ✅ 图片压缩
- ✅ CSS/JS 压缩
- ✅ 浏览器缓存优化

---

🎉 **恭喜！你的 T2T-YAO 基因组数据下载门户现在已经部署在 Netlify 上了！** 