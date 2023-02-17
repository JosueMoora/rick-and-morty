const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const validation = (userData) => {
    const errors = {}
  
  
     if(!regexEmail.test(userData.username)) errors.username = 'Introduzca un email valido'
     if(!userData.username) errors.username = 'el nombre de usuario no puede estar vacío.'
     if(userData.username.length > 35) errors.username = 'el nombre de usuario no puede tener más de 35 caracteres.' 

     if(!userData.password.match(/\d/)) errors.password = 'la contraseña tiene que tener al menos un número.'
     if(userData.password.length < 6 || userData.password.length > 10) errors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres.'
  
    return errors
  }

  export default validation