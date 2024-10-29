document.addEventListener('DOMContentLoaded', (event) => {
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');
            if (url) {
                if (url.startsWith('tel')) {
                    window.location.href = url;
                }
                window.open(url, '_blank');
            }
        });
    });
});