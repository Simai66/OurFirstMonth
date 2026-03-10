import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for the reveal effect
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "-5% 0px -5% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Fade out when scrolling away for a more dynamic feel
                if (entry.boundingClientRect.top > 0) {
                    entry.target.classList.remove('active');
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Smooth background parallax and color shifting
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        // Calculate scroll percentage using document.body.scrollHeight instead of documentElement for better cross-browser
        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const maxScroll = scrollHeight - window.innerHeight;
        const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

        const b1 = document.getElementById('blob-1');
        const b2 = document.getElementById('blob-2');
        const b3 = document.getElementById('blob-3');

        if (b1 && b2 && b3) {
            // Smooth movement
            const moveX = scrollPercent * 150;
            const moveY = scrollPercent * 80;

            b1.style.transform = `translate(${moveX}px, ${moveY}px)`;
            b2.style.transform = `translate(-${moveX * 0.8}px, -${moveY * 1.2}px)`;
            b3.style.transform = `translate(${moveX * 0.5}px, -${moveY * 0.5}px) scale(${1 + scrollPercent * 0.2})`;
        }

        // Shift background colors smoothly based on progress
        if (scrollPercent > 0.8) {
            document.body.style.backgroundColor = '#fff0f3';
        } else if (scrollPercent > 0.4) {
            document.body.style.backgroundColor = '#fff7f8';
        } else {
            document.body.style.backgroundColor = '#fff5f7';
        }

        lastScrollY = scrollY;
    });
});
