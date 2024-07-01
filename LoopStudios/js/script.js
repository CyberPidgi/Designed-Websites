function navToggle() {
    document.getElementById('menu-btn').classList.toggle('open')
    const menu = document.getElementById('menu')
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}

window.onload = function() {
    document.getElementById('menu-btn').addEventListener('click', navToggle);
}


