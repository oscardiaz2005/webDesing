

const loginform = document.getElementById('loginform');

loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user => user.usuario === usuario && user.password === password);

    if (!validUser) {
        return alert('Usuario o contraseña incorrectos');
    }

    localStorage.setItem('loggedUser', JSON.stringify(validUser));

    window.location.href = 'index.html';
});
