const header = document.querySelectorAll("[data-name='accordeon-title']");
header.forEach(function(item) {
    item.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('dis')
    })
})