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