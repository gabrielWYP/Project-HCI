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

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.25)';
        });

        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

function adjustAccessibilityForVisualImpairment() {
    changeCSS('css/stylefont.css');  // Ruta del archivo CSS para personas con discapacidad visual
}
function changeCSS(cssFile) {
    let linkElement = document.getElementById('accessibility-css');
    if (linkElement) {
        linkElement.href = cssFile;
    } else {
        linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.id = 'accessibility-css';
        linkElement.href = cssFile;
        document.head.appendChild(linkElement);
    }
}

function ReiniciarTodo() {
    removeFilter();
    changeCSS('style.css');
}