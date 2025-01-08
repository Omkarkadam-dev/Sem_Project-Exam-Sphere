function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

function performSearch() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim()) {
        alert(`Searching for: ${searchInput}`);
    } else {
        alert('Please enter a search term.');
    }
}
