function toggleAccessibilityOptions() {
    const options = document.querySelector('.accessibility-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function adjustAccessibility(profile) {
    // Lógica para ajustar la accesibilidad según el perfil seleccionado
    console.log(`Ajuste de accesibilidad aplicado: Perfil ${profile}`);
}

function resetAccessibility() {
    // Lógica para reiniciar los ajustes de accesibilidad
    console.log('Ajustes de accesibilidad reiniciados');
}
