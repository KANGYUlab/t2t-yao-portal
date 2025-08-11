// T2T-YAO 下载页面脚本

document.addEventListener('DOMContentLoaded', function() {
    console.log('T2T-YAO 下载页面已加载');
    
    // 初始化页面
    initializePage();
    
    // 添加下载按钮事件监听器
    setupDownloadButtons();
    
    // 添加版本卡片悬停效果
    setupCardHoverEffects();
});

/**
 * 初始化页面
 */
function initializePage() {
    // 添加页面加载动画
    document.body.classList.add('loaded');
    
    // 设置页面标题
    document.title = 'T2T-YAO 基因组数据下载';
    
    console.log('页面初始化完成');
}

/**
 * 设置下载按钮事件
 */
function setupDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn.primary');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const fileName = this.textContent.trim();
            const fileSize = this.querySelector('.file-size')?.textContent || '';
            
            console.log(`开始下载: ${fileName} (${fileSize})`);
            
            // 添加下载状态指示
            this.classList.add('downloading');
            this.innerHTML = `
                <span class="icon">⏳</span>
                <span>下载中...</span>
            `;
            
            // 模拟下载延迟（实际使用时删除）
            setTimeout(() => {
                this.classList.remove('downloading');
                this.innerHTML = `
                    <span class="icon">📥</span>
                    ${fileName}
                    <span class="file-size">${fileSize}</span>
                `;
                
                // 显示下载完成消息
                showMessage('下载已开始', 'success');
            }, 2000);
        });
    });
}

/**
 * 设置卡片悬停效果
 */
function setupCardHoverEffects() {
    const releaseCards = document.querySelectorAll('.release-card');
    
    releaseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * 显示消息提示
 */
function showMessage(message, type = 'info') {
    // 创建消息元素
    const messageElement = document.createElement('div');
    messageElement.className = `message message-${type}`;
    messageElement.textContent = message;
    
    // 添加样式
    messageElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    // 根据类型设置背景色
    if (type === 'success') {
        messageElement.style.backgroundColor = '#2da44e';
    } else if (type === 'error') {
        messageElement.style.backgroundColor = '#cf222e';
    } else {
        messageElement.style.backgroundColor = '#0969da';
    }
    
    // 添加到页面
    document.body.appendChild(messageElement);
    
    // 3秒后自动移除
    setTimeout(() => {
        messageElement.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.parentNode.removeChild(messageElement);
            }
        }, 300);
    }, 3000);
}

/**
 * 添加CSS动画
 */
function addAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .loaded {
            opacity: 1;
        }
        
        .downloading {
            background-color: #0969da !important;
            cursor: not-allowed;
        }
    `;
    
    document.head.appendChild(style);
}

// 添加动画样式
addAnimations();

// 导出函数供外部使用
window.T2TYAO = {
    showMessage,
    initializePage
}; 