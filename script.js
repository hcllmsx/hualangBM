// 动态设置图片背景
const images = document.querySelectorAll('.image');
const description = document.createElement('div');
description.className = 'description';
document.body.appendChild(description);

// 描述文字的缓动效果
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
const ease = 0.1; // 缓动系数，值越小越平滑

function animateDescription() {
    const dx = targetX - currentX;
    const dy = targetY - currentY;
    currentX += dx * ease;
    currentY += dy * ease;
    description.style.left = `${currentX + 15}px`;
    description.style.top = `${currentY + 15}px`;
    requestAnimationFrame(animateDescription);
}
animateDescription();

images.forEach((image) => {
    image.style.backgroundImage = `url(${image.getAttribute('data-src')})`;

    // 鼠标移动时图片跟随移动
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
        const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
        image.style.transform = `scale(1.05) translate(${offsetX * 10}px, ${offsetY * 10}px)`; // 减少偏移量，加快响应速度

        // 更新描述文字位置
        targetX = e.clientX;
        targetY = e.clientY;

        // 显示描述文字
        const descText = image.getAttribute('data-description');
        description.textContent = descText;
        description.style.opacity = 1;
    });

    // 鼠标离开时恢复图片和隐藏描述文字
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1) translate(0, 0)';
        description.style.opacity = 0;
    });
});