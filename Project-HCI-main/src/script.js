function changeColorPalette() {
    const select = document.getElementById('colorBlindnessType');
    const selectedType = select.value;
    document.body.className = selectedType;
}