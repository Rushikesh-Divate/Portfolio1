// Future enhancements can be added here
console.log("Portfolio Loaded Successfully");
// Animate skill bars
window.addEventListener("load", () => {
    const skills = document.querySelectorAll(".skill-progress");

    skills.forEach(skill => {
        const value = skill.getAttribute("data-progress");
        skill.style.width = value + "%";
    });
});
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const hero = document.querySelector('.hero-section');

themeToggle.addEventListener('click', () => {
    if(body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        hero.classList.replace('dark-theme', 'light-theme');
        themeToggle.textContent = '🌞';
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        hero.classList.replace('light-theme', 'dark-theme');
        themeToggle.textContent = '🌙';
    }
});

