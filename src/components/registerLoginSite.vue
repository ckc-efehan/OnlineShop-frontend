<template>
  <div class="container" id="container">
    <!-- Registrierung -->
    <div class="form-container sign-up">
      <form @submit.prevent="handleRegisterSubmit">
        <h1>Account erstellen</h1>
        <div class="social-icons">
          <a href="#" class="icon"><i class="fa-brands fa-google"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-apple"></i></a>
        </div>
        <input type="text" v-model="registerForm.username" placeholder="Benutzernamen eingeben" required />
        <input type="email" v-model="registerForm.email" placeholder="Email eingeben" required />
        <input type="password" v-model="registerForm.passwort" placeholder="Passwort eingeben" required />
        <input type="password" v-model="registerForm.confirmPasswort" placeholder="Passwort bestätigen" required />
        <button type="submit">Registrieren</button>

        <!-- Zeige eine Fehlermeldung an, falls die Passwörter nicht übereinstimmen oder die Registrierung fehlschlägt -->
        <p v-if="passwordMismatchMessage" class="error">{{ passwordMismatchMessage }}</p>
        <p v-if="registerErrorMessage" class="error">{{ registerErrorMessage }}</p>

        <!-- Zeige nach erfolgreicher Registrierung eine Nachricht an -->
        <div v-if="registerSubmitted && !registerErrorMessage">
          <h3>Erfolgreich registriert</h3>
        </div>
      </form>
    </div>

    <!-- Login Formular unverändert -->
    <div class="form-container sign-in">
      <form @submit.prevent="handleLoginSubmit">
        <h1>Anmelden</h1>
        <div class="social-icons">
          <a href="#" class="icon"><i class="fa-brands fa-google"></i></a>
          <a href="#" class="icon"><i class="fa-brands fa-apple"></i></a>
        </div>
        <input type="text" v-model="loginForm.username" placeholder="Benutzername" required />
        <input type="password" v-model="loginForm.passwort" placeholder="Passwort" required />
        <a href="#">Passwort vergessen?</a>
        <button type="submit">Anmelden</button>

        <p v-if="loginErrorMessage" class="error">{{ loginErrorMessage }}</p>

        <div v-if="loginSubmitted && !loginErrorMessage">
          <h3>Successfully Logged In</h3>
        </div>
      </form>
    </div>

    <!-- Umschaltbares Panel unverändert -->
    <div class="toggle-container">
      <div class="toggle">
        <div class="toggle-panel toggle-left">
          <h1>Bereits registriert?</h1>
          <p>Geben Sie Ihre Anmeldedaten ein, um mit Ihrem Einkauf fortzufahren.</p>
          <button class="hidden" id="login">Anmelden</button>
        </div>
        <div class="toggle-panel toggle-right">
          <h1>Noch nicht registriert?</h1>
          <p>Registriere dich jetzt, um exklusive Klamotten zu kaufen.</p>
          <button class="hidden" id="register">Registrieren</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';  // Importiere den Router
import axios from 'axios';

const router = useRouter();  // Initialisiere den Router

// Formulardaten für die Registrierung
const registerForm = ref({
  username: '',
  email: '',
  passwort: '',
  confirmPasswort: ''
});

// Formulardaten für den Login
const loginForm = ref({
  username: '',
  passwort: ''
});

// Zustand zur Verfolgung der Registrierung und Login-Fehler
const registerSubmitted = ref(false);
const loginSubmitted = ref(false);
const registerErrorMessage = ref('');
const loginErrorMessage = ref('');
const passwordMismatchMessage = ref('');

// Funktion für die Registrierung
const handleRegisterSubmit = async () => {
  if (registerForm.value.passwort !== registerForm.value.confirmPasswort) {
    passwordMismatchMessage.value = 'Die Passwörter stimmen nicht überein.';
    return;
  }

  try {
    // Registrierung beim Server durchführen
    await axios.post('http://localhost:8080/api/v1/auth/register', {
      userName: registerForm.value.username,
      email: registerForm.value.email,
      password: registerForm.value.passwort
    });
    registerSubmitted.value = true;
    registerErrorMessage.value = '';
    passwordMismatchMessage.value = ''; // Setze die Fehlermeldung zurück

  } catch (error: any) {
    registerSubmitted.value = false;
    registerErrorMessage.value = error.response?.data || 'Registration failed.';
  }
};

// Funktion für den Login
const handleLoginSubmit = async () => {
  try {
    await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
      userName: loginForm.value.username,
      password: loginForm.value.passwort
    });
    loginSubmitted.value = true;
    loginErrorMessage.value = '';

    // Nach erfolgreichem Login zur Admin-Seite weiterleiten
    router.push('/admin');  // Hier wird der Benutzer weitergeleitet
  } catch (error: any) {
    loginSubmitted.value = false;
    loginErrorMessage.value = error.response?.data || 'Login failed.';
  }
};


// Umschaltfunktion für Registrierung und Login
onMounted(() => {
  const container = document.getElementById('container') as HTMLElement | null;
  const registerBtn = document.getElementById('register') as HTMLButtonElement | null;
  const loginBtn = document.getElementById('login') as HTMLButtonElement | null;

  if (registerBtn && container) {
    registerBtn.addEventListener('click', () => {
      container.classList.add("active");
    });
  }

  if (loginBtn && container) {
    loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
    });
  }
});
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #c9d6ff;
  background: linear-gradient(to right, #c9d6ff, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.container span {
  font-size: 12px;
}

.container a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.container button {
  background-color: #512da8;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

.container button.hidden {
  background-color: transparent;
  border-color: #fff;
}

.container form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}

.container input {
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.active .sign-in {
  transform: translateX(100%);
}

.sign-up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.social-icons{
  margin: 20px 0;
}

.social-icons a{
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}

.toggle-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.container.active .toggle-container {
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}

.toggle {
  background-color: #512da8;
  height: 100%;
  background: linear-gradient(to right, #512da8, #5c6bc0);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.container.active .toggle {
  transform: translateX(50%);
}

.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.toggle-left {
  transform: translateX(-200%);
}

.container.active .toggle-left {
  transform: translateX(0);
}

.toggle-right {
  right: 0;
  transform: translateX(0);
}

.container.active .toggle-right {
  transform: translateX(200%);
}

.error {
  color: red;
  margin-top: 10px;
}


.social-icons{
  margin: 20px 0;
}

.social-icons a{
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}
</style>
