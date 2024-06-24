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

document.addEventListener('DOMContentLoaded', function() {
    // Función para reproducir audio con delay
    function playAudioWithDelay() {
        var audio = document.getElementById('audioTrack');
        if (audio) {
            // Pausar el audio al principio para reiniciar desde el principio
            audio.pause();
            audio.currentTime = 0;
            // Aplicar el delay de 2 segundos después de que la página esté completamente cargada
            setTimeout(function() {
                audio.play();
            }, 2000); // Delay de 2 segundos (2000 milisegundos)
        }
    }

    // Reproducir audio con delay cuando se carga la página
    playAudioWithDelay();

    // Manejar evento load para esperar a que la página esté completamente cargada
    window.addEventListener('load', function() {
        // Reproducir audio con delay después de cargar completamente la página
        playAudioWithDelay();
    });

    // Evento clic en cualquier enlace dentro del documento
    document.addEventListener('click', function(event) {
        var target = event.target;
        // Verificar si el clic fue en un enlace
        if (target.tagName.toLowerCase() === 'a') {
            // Obtener la URL del enlace
            var nextPage = target.getAttribute('href');
            // Redirigir a la página después del delay
            setTimeout(function() {
                window.location.href = nextPage;
            }, 2000); // Delay de 2 segundos (2000 milisegundos)
        }
    });
});