#!/bin/bash

# 部署脚本
echo "开始部署T2T-YAO下载门户..."

# 构建项目
echo "构建生产版本..."
npm run build

# 检查构建是否成功
if [ ! -d "dist" ]; then
    echo "构建失败！dist文件夹不存在"
    exit 1
fi

echo "构建成功！"

# 部署到服务器（需要配置）
# SERVER_IP="your-server-ip"
# SERVER_USER="your-username"
# REMOTE_PATH="/var/www/t2t-yao-portal"

# echo "上传文件到服务器..."
# scp -r dist/ $SERVER_USER@$SERVER_IP:$REMOTE_PATH

# echo "重启Nginx服务..."
# ssh $SERVER_USER@$SERVER_IP "sudo systemctl reload nginx"

echo "部署完成！"
echo "本地预览: http://localhost:8080"
echo "生产文件已生成在 dist/ 文件夹中" 