function applyFilter(type) {
    document.body.style.filter = `url(#${type})`;
}

function removeFilter() {
    document.body.style.filter = 'none';
}

function toggleAccessibilityOptions() {
    const options = document.querySelector('.accessibility-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}