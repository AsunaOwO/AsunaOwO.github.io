function moveButton() {


    let button = document.getElementById("no");

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let buttonWidth = button.offsetWidth;
    let buttonHeight = button.offsetHeight;

    let maxX = viewportWidth - buttonWidth - 20;  
    let maxY = viewportHeight - buttonHeight - 20; 

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    i++;


}