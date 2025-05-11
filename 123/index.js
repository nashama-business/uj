


// جلب العناصر
const navEl = document.querySelector('.nav');
const hamburgerLabel = document.querySelector('.hamburger');
const toggleInput = document.querySelector('.hamburger input');
const navLinks = document.querySelectorAll('.nav__link');

// دالة لتبديل حالة القائمة
function updateNav(isOpen) {
    navEl.classList.toggle('nav--open', isOpen);
    hamburgerLabel.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

// عند تغيير حالة الـ checkbox
toggleInput.addEventListener('change', () => {
    updateNav(toggleInput.checked);
});

// إغلاق القائمة عند النقر على أي رابط
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleInput.checked = false;
        updateNav(false);
    });
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', e => {
    const isInside = navEl.contains(e.target) || hamburgerLabel.contains(e.target);
    if (!isInside && toggleInput.checked) {
        toggleInput.checked = false;
        updateNav(false);
    }
});

// تهيئة ARIA عند التحميل
updateNav(false);

const trailLength = 10;
const trail = [];

function createJordanStarSVG() {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("class", "star-trail");

    const path = document.createElementNS(svgNS, "path");

    const cx = 50;
    const cy = 50;
    const r = 40;
    const points = [];
    const step = 2;

    for (let i = 0; i < 7; i++) {
        const angle = ((2 * Math.PI) / 7) * ((i * step) % 7) - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        points.push(`${x},${y}`);
    }

    let d = `M${points[0]}`;
    for (let i = 1; i < points.length; i++) {
        d += ` L${points[i]}`;
    }
    d += " Z";

    path.setAttribute("d", d);
    path.setAttribute("fill", "white");
    path.setAttribute("stroke", "#D02024");
    path.setAttribute("stroke-width", "1");

    svg.appendChild(path);
    return svg;
}

// شغّل فقط إذا الشاشة أكبر من 768 بكسل (أي ليست هاتفًا أو جهازًا لوحيًا)
if (!/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) && window.innerWidth > 768) {

    for (let i = 0; i < trailLength; i++) {
        const star = createJordanStarSVG();
        document.body.appendChild(star);
        trail.push(star);
    }

    document.addEventListener("mousemove", (e) => {
        const { clientX: x, clientY: y } = e;
        trail.forEach((star, index) => {
            setTimeout(() => {
                star.style.left = `${x}px`;
                star.style.top = `${y}px`;
            }, index * 30);
        });
    });
}