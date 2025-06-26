function moveButton() {


    let button = document.getElementById("no");

    // Holen der Bildschirmgröße
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    // Holen der tatsächlichen Button-Größe
    let buttonWidth = button.offsetWidth;
    let buttonHeight = button.offsetHeight;

    // Berechne zufällige Position
    let maxX = viewportWidth - buttonWidth - 20;  // 20px Abstand vom Rand
    let maxY = viewportHeight - buttonHeight - 20; // 20px Abstand vom Rand

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    // Position setzen
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    i++;


}