#!/bin/bash

echo "=== T2T-YAO Vue.js 项目构建脚本 ==="

# 检查Node.js版本
echo "检查Node.js版本..."
node --version
npm --version

# 安装依赖
echo "安装项目依赖..."
npm install

# 构建生产版本
echo "构建生产版本..."
npm run build

# 检查构建结果
if [ -d "dist" ]; then
    echo "✅ 构建成功！"
    echo "📁 生产文件位置: dist/"
    echo "📊 文件大小:"
    du -sh dist/
    
    echo ""
    echo "🚀 部署选项:"
    echo "1. 本地预览: npm run serve"
    echo "2. 生产部署: 将 dist/ 文件夹上传到服务器"
    echo "3. 使用部署脚本: ./deploy.sh"
    
else
    echo "❌ 构建失败！"
    exit 1
fi 