// Access to API /login with POST method

// Define main variables
const loginForm = document.getElementById('login-form')
const userMail = document.getElementById('user-email')
const userPassword = document.getElementById('user-password')

loginForm.addEventListener('submit', async function(e){
    e.preventDefault()

    const loginData = {
        email: userMail.value,
        password: userPassword.value
    }

    // Convert the data into JSON
    const formJSON = JSON.stringify(loginData)

    const response = await fetch('http://localhost:5678/api-docs/#/default/post_users_login', {
        method: "POST",
        headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: formJSON
    })
    const data = await response.json()
    const tokenId = data.token

    if (response.ok === true){
        localStorage.setItem('token', tokenId);
        window.location.href = 'index.html'
    } else {
        alert("Erreur dans l'identifiant ou le mot de passe")
    }

})