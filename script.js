document.addEventListener('DOMContentLoaded', function () {
    const toolSections = document.querySelectorAll('.tool-section');

    toolSections.forEach(section => {
        section.addEventListener('click', function () {
            const destination = this.getAttribute('data-href');
            window.location.href = destination;
        });
    });
});
