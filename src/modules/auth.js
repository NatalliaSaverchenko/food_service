const auth = () => {
  const buttonAuth = document.querySelector('.button-auth')
  const modalAuth = document.querySelector('.modal-auth')
  const buttonOut = document.querySelector('.button-out')

  const userName = document.querySelector('.user-name')

  const closeAuth = document.querySelector('.close-auth')
  const logInForm = document.getElementById('logInForm')
  const inputLogin = document.getElementById('login')
  const inputPassword = document.getElementById('password')

  const buttonCart = document.querySelector('.button-cart')

  const login = (user) => {
    buttonAuth.style.display = 'none'
    userName.style.display = 'flex'
    buttonOut.style.display = 'flex'

    if (!user.login) {
      alert('Введите логин!')
      logout()
      buttonOut.style.display = 'none'
    } else {
      userName.textContent = user.login
      modalAuth.style.display = 'none'
      buttonCart.style.display = 'flex'
 
    }
  }
  const logout = () => {
    buttonOut.style.display = 'none'
    buttonAuth.style.display = 'flex'
    userName.style.display = 'none'
    userName.textContent = ''
    buttonCart.style.display = 'none'
    localStorage.removeItem('user')
  }

  buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
  })
  closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
  })
  logInForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const user = {
      login: inputLogin.value,
      password: inputPassword.value,
    }
    localStorage.setItem('user', JSON.stringify(user))
    login(user)
  })
  buttonOut.addEventListener('click', () => {
    logout()
  })
  if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')))
  }
}
export default auth
