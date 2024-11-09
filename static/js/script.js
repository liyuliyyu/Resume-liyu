document.addEventListener('DOMContentLoaded', function () {
    const contactInfoElements = document.querySelectorAll('.contact-info .label-value[data-url]');
    contactInfoElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault(); // 阻止默认行为
            const url = this.getAttribute('data-url');
            if (url) {
                if (url.startsWith('tel') || url.startsWith('mailto')) {
                    window.location.href = url;
                }
                window.open(url, '_blank');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取所有缩略图
    const thumbnails = document.querySelectorAll('.thumbnail-container img');

    // 获取模态框和关闭按钮
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('img01');
    const span = document.getElementsByClassName('close')[0];

    // 为每个缩略图添加点击事件
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.getAttribute('data-src');
        });
    });

    // 关闭模态框
    if (span) {
        span.onclick = function() {
            modal.style.display = 'none';
        };
    }

    // 点击模态框外部关闭
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

