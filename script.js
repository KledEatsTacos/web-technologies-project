var navbarCollapse = document.getElementById('navbarNavDropdown');

navbarCollapse.addEventListener('show.bs.collapse', function() {
    document.getElementById('construction').classList.add('hidden');
});

navbarCollapse.addEventListener('hidden.bs.collapse', function() {
    document.getElementById('construction').classList.remove('hidden');
});