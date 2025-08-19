/* FILE: js/script.js */

document.addEventListener('DOMContentLoaded', function () {

    // --- PERSISTENCE ---
    // Apply theme and accessibility settings from localStorage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    const savedFont = localStorage.getItem('font');
    if (savedFont === 'increased') {
        document.body.classList.add('font-increase');
    }


    // --- DARK MODE ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');

            // Save preference to localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }


    // --- ACCESSIBILITY ---
    const accessibilityBtn = document.getElementById('accessibility-btn');
    if (accessibilityBtn) {
        accessibilityBtn.addEventListener('click', function() {
            document.body.classList.toggle('font-increase');

            // Save preference to localStorage
            if (document.body.classList.contains('font-increase')) {
                localStorage.setItem('font', 'increased');
            } else {
                localStorage.setItem('font', 'normal');
            }
        });
    }


    // --- BOOTSTRAP FORM VALIDATION ---
    (function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })();


    // --- NEWS PAGE FILTER ---
    const newsFilterButtons = document.querySelectorAll('.filter-btn');
    const newsItems = document.querySelectorAll('.news-item');

    if (newsFilterButtons.length > 0 && newsItems.length > 0) {
        newsFilterButtons.forEach(button => {
            button.addEventListener('click', function () {
                newsFilterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');

                newsItems.forEach(item => {
                    item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) ? 'block' : 'none';
                });
            });
        });
    }


    // --- CONVENIOS PAGE FILTER ---
    const conveniosFilterButtons = document.querySelectorAll('.filter-btn-convenios');
    const partnerItems = document.querySelectorAll('.partner-item');

    if (conveniosFilterButtons.length > 0 && partnerItems.length > 0) {
        conveniosFilterButtons.forEach(button => {
            button.addEventListener('click', function () {
                conveniosFilterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');

                partnerItems.forEach(item => {
                    item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) ? 'block' : 'none';
                });
            });
        });
    }

});

/* --- SCRIPTS ADICIONAIS PARA O PORTAL DO ASSOCIADO --- */

document.addEventListener('DOMContentLoaded', function() {
    const addDependenteBtn = document.getElementById('add-dependente-btn');
    if (addDependenteBtn) {
        addDependenteBtn.addEventListener('click', function() {
            // Futuramente, este botão pode abrir um modal para adicionar dependentes.
            // Por enquanto, exibimos um alerta como placeholder.
            alert('Funcionalidade de adicionar dependente a ser implementada.');
        });
    }
});
