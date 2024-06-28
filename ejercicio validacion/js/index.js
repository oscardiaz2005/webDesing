const loggedUserData = localStorage.getItem('loggedUser');
    const loggedUser = JSON.parse(loggedUserData);
    document.getElementById('h1').innerText = `Bienvenido, ${loggedUser.nombre}!`;
