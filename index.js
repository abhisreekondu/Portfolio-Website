// smooth-scroll.js

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offsetTop = targetSection.offsetTop;
            const scrollOptions = {
                top: offsetTop,
                behavior: 'smooth'
            };

            window.scrollTo(scrollOptions);
        });
    });
});
