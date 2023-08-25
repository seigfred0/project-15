const toggle = document.getElementById('toggle-btn');
const body = document.body;
const cards = document.querySelectorAll('.DL-mode');

toggle.addEventListener('change', function() {
    body.classList.toggle('light-mode', toggle.checked);
    body.classList.toggle('dark-mode', !toggle.checked);

    cards.forEach(card => {
        card.classList.toggle('cardLightMode', toggle.checked);
    })

})

