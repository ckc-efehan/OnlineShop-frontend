<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

// Formulardaten für die Registrierung
const registerForm = ref({
  username: '',
  email: '',
  passwort: ''
})

// Formulardaten für den Login
const loginForm = ref({
  username: '',
  passwort: ''
})

// Zustand zur Verfolgung der Registrierung und Login-Fehler
const registerSubmitted = ref(false)
const loginSubmitted = ref(false)
const registerErrorMessage = ref('')
const loginErrorMessage = ref('')

const handleRegisterSubmit = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/users/register', {
      userName: registerForm.value.username,
      email: registerForm.value.email,
      password: registerForm.value.passwort
    });

    // Wenn die Registrierung erfolgreich ist
    registerSubmitted.value = true;
    registerErrorMessage.value = '';
    console.log('Registrierung erfolgreich. JWT-Token wird in einem httpOnly-Cookie gespeichert.');

    // Keine Speicherung im localStorage nötig
  } catch (error: any) {
    registerSubmitted.value = false;
    registerErrorMessage.value = error.response?.data || 'Registrierung fehlgeschlagen.';
    console.error('Registrierungsfehler:', error);
  }
};

const handleLoginSubmit = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/users/login', {
      userName: loginForm.value.username,
      password: loginForm.value.passwort
    });

    // Wenn das Login erfolgreich ist
    loginSubmitted.value = true;
    loginErrorMessage.value = '';
    console.log('Login erfolgreich.');

    // Keine Speicherung im localStorage nötig
  } catch (error: any) {
    loginSubmitted.value = false;
    loginErrorMessage.value = error.response?.data || 'Login fehlgeschlagen.';
    console.error('Login-Fehler:', error);
  }
};
</script>

<template>
  <!-- Registrierung -->
  <div class="register-container">
    <h2>Registrieren</h2>
    <form @submit.prevent="handleRegisterSubmit">
      <label for="register-username">Benutzername:</label>
      <input type="text" id="register-username" v-model="registerForm.username" required />

      <label for="email">E-Mail:</label>
      <input type="email" id="email" v-model="registerForm.email" required />

      <label for="register-password">Passwort:</label>
      <input type="password" id="register-password" v-model="registerForm.passwort" required />

      <button type="submit">Registrieren</button>
    </form>

    <!-- Zeige eine Fehlermeldung an, falls die Registrierung fehlschlägt -->
    <p v-if="registerErrorMessage" class="error">{{ registerErrorMessage }}</p>

    <!-- Zeige nach der Einreichung die eingegebenen Daten an -->
    <div v-if="registerSubmitted && !registerErrorMessage">
      <h3>Erfolgreich Registriert:</h3>
      <p>Benutzername: {{ registerForm.username }}</p>
      <p>E-Mail: {{ registerForm.email }}</p>
    </div>
  </div>

  <!-- Login -->
  <div class="login-container">
    <h3>Login</h3>
    <form @submit.prevent="handleLoginSubmit">
      <label for="login-username">Benutzername:</label>
      <input type="text" id="login-username" v-model="loginForm.username" required />

      <label for="login-password">Passwort:</label>
      <input type="password" id="login-password" v-model="loginForm.passwort" required />

      <button type="submit">Login</button>
    </form>

    <!-- Zeige eine Fehlermeldung an, falls das Login fehlschlägt -->
    <p v-if="loginErrorMessage" class="error">{{ loginErrorMessage }}</p>

    <!-- Zeige nach erfolgreichem Login eine Nachricht an -->
    <div v-if="loginSubmitted && !loginErrorMessage">
      <h3>Erfolgreich Eingeloggt</h3>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.register-container, .login-container, .protected-resource {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 10px;
}

h2, h3 {
  text-align: center;
}

input[type="text"], input[type="email"], input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
