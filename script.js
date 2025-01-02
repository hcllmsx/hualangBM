// 动态设置图片背景
const images = document.querySelectorAll('.image');
images.forEach((image, index) => {
    image.style.backgroundImage = `url(${image.getAttribute('data-src')})`;
});

// 鼠标移动时图片跟随移动
images.forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
        const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
        image.style.transform = `scale(1.05) translate(${offsetX * 20}px, ${offsetY * 20}px)`;
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1) translate(0, 0)';
    });
});