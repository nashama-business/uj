// Custom cursor elements
const cursor = document.createElement('div');
const cursorDot = document.createElement('div');

// Add cursor classes
cursor.classList.add('cursor');
cursorDot.classList.add('cursor-dot');

// Append cursors to body
document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

// Cursor movement
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// Cursor hover effects
const links = document.querySelectorAll('a, button, .services-list li, .hamburger');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-dot-hover');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-dot-hover');
    });
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    hamburger.classList.toggle('hamburger--open');
}); 