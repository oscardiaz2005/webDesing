const registroform=document.getElementById('registroform')
registroform.addEventListener('submit', (e)=>{
e.preventDefault()
const usuario= document.getElementById('usuario').value
const password= document.getElementById('password').value
const nombre= document.getElementById('nombre').value

const users=JSON.parse(localStorage.getItem('users')) || []
const registrado= users.find(users=>users.usuario==usuario)
if (registrado){
    return alert('El usuario ya esta registrado')
}
users.push( {usuario:usuario, password:password , nombre:nombre},)
localStorage.setItem('users', JSON.stringify(users) )
alert('registro exitoso')

console.log(users)
 window.location.href='login.html'


})