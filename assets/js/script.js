document.addEventListener('DOMContentLoaded', function () {
    const darkModeBtn = document.getElementById('darkModeBtn');

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const value = bar.getAttribute('data-skill-value');
            bar.style.width = value;
        });
    }

    animateSkillBars();
});
