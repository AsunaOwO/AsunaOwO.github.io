document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Login-Data
    const User = "Asuna";
    const Pass = "Secure_Passw0rd";

    if (username === User && password === Pass) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = "Login erfolgreich!";
        window.location.href = "html/hub.html";
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = "Falscher Benutzername oder Passwort!";
    }
});
